const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: '147.232.47.244',
  user: 'Pervashov',
  password: '186592387',
  database: 'Pervashov'
};

const db = mysql.createConnection(dbConfig);
app.get('/api/exponaty-kategoria', (req, res) => {
  const sql = `
      SELECT E.Názov AS nazov, E.Popis, K.Názov_kategórie AS kategoria 
      FROM Exponát E 
      JOIN Kategória_exponátu K ON E.ID_kategórie = K.ID_kategórie;
  `;
  db.query(sql, (error, results) => {
      if (error) {
          console.error('Error fetching data:', error); // Логирование ошибки в консоль сервера
          return res.status(500).send('Error fetching data'); // Отправка сообщения об ошибке клиенту
      }
      res.json(results);
  });
});
app.get('/api/exponaty-count-sala', (req, res) => {
  const sql = `
      SELECT V.Názov_sály AS sala, COUNT(E.ID_exponátu) AS count
      FROM Výstavná_sála V
      LEFT JOIN Exponát E ON V.ID_sály = E.ID_výstavnej_sály
      GROUP BY V.Názov_sály;
  `;
  db.query(sql, (error, results) => {
      if (error) {
          console.error('Error fetching data:', error);
          return res.status(500).send('Error fetching data');
      }
      res.json(results);
  });
});
app.get('/api/exponaty-vypozicane-2022', (req, res) => {
  const sql = `
  SELECT Názov, Datum_zapôžičania, Datum_vrátenia
  FROM Exponát
  WHERE Datum_zapôžičania BETWEEN '2022-01-01' AND '2022-12-31';`;
  db.query(sql, (error, results) => {
      if (error) {
          console.error('Error fetching data:', error);
          return res.status(500).send('Error fetching data');
      }
      res.json(results);
  });
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// GET запросы для всех таблиц
app.get('/vystavna_sala', (req, res) => {
  db.query('SELECT * FROM Výstavná_sála', (error, results) => {
    if (error) {
      res.status(500).send('Error on the server.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/exponat', (req, res) => {
  db.query('SELECT * FROM Exponát', (error, results) => {
    if (error) {
      res.status(500).send('Error on the server.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/kategoria_exponatu', (req, res) => {
  db.query('SELECT * FROM Kategória_exponátu', (error, results) => {
    if (error) {
      res.status(500).send('Error on the server.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/zamestnanec', (req, res) => {
  db.query('SELECT * FROM Zamestnanec', (error, results) => {
    if (error) {
      res.status(500).send('Error on the server.');
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/:table/delete', (req, res) => {
  const { id } = req.body; // Получаем ID записи из тела запроса
  const table = req.params.table; // Получаем имя таблицы из URL

  console.log(`Received request to delete ID ${id} from table ${table}`);

  if (!id) {
      console.log('Error: ID is required.');
      return res.status(400).send('ID is required');
  }

  let query;

  switch(table) {
    case 'Výstavná_sála':
      console.log('Processing delete for Výstavná_sála');
      query = 'DELETE FROM Výstavná_sála WHERE ID_sály = ?';
      break;
    case 'exponat':
      console.log('Processing delete for Exponát');
      query = 'DELETE FROM Exponát WHERE ID_exponátu = ?';
      break;
    case 'Kategória_exponátu':
      console.log('Processing delete for Kategória_exponátu');
      query = 'DELETE FROM Kategória_exponátu WHERE ID_kategórie = ?';
      break;
    case 'Zamestnanec':
      console.log('Processing delete for Zamestnanec');
      query = 'DELETE FROM Zamestnanec WHERE ID_zamestnanca = ?';
      break;
    default:
      console.log('Error: Table not found.');
      return res.status(404).send('Table not found.');
  }

  console.log(`Executing query: ${query}`);

  db.query(query, [id], (error, results) => {
      if (error) {
          console.log(`Error deleting row: ${error.message}`);
          return res.status(500).send(`Error deleting row: ${error.message}`);
      }
      if (results.affectedRows === 0) {
          console.log('No row found with the given ID.');
          return res.status(404).send('No row found with the given ID.');
      }
      console.log('Row deleted successfully.');
      res.status(200).json({ message: 'Row deleted successfully.' });
  });
});

app.post('/:table/add', (req, res) => {
  const table = req.params.table; // Получаем имя таблицы из URL
  const data = req.body; // Получаем данные для добавления из тела запроса
  console.log(`Received request to add data to table ${table}:`, data);

  let query;
  let queryParams;

  switch (table) {
      case 'Výstavná_sála':
          console.log('Processing add for Výstavná_sála');
          query = 'INSERT INTO Výstavná_sála (Názov_sály) VALUES (?)';
          queryParams = [data.Názov_sály];
          break;
      case 'exponat':
          console.log('Processing add for Exponát');
          query = `
              INSERT INTO Exponát (ID_exponátu, Názov, Očakávaný_vek, Cena, Druh, Krajina_pôvodu, Popis, Datum_zapôžičania, 
                                   Datum_vrátenia, ID_zamestnanca, ID_výstavnej_sály, Vitrína, ID_kategórie)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `;
          queryParams = [
              data.ID_exponátu, data.Názov, data.Očakávaný_vek, data.Cena, data.Druh, data.Krajina_pôvodu, data.Popis,
              data.Datum_zapôžičania, data.Datum_vrátenia, data.ID_zamestnanca, data.ID_výstavnej_sály, data.Vitrína, data.ID_kategórie
          ];
          break;
      case 'Kategória_exponátu':
          console.log('Processing add for Kategória_exponátu');
          query = 'INSERT INTO Kategória_exponátu (Názov_kategórie) VALUES (?)';
          queryParams = [data.Názov_kategórie];
          break;
      case 'Zamestnanec':
          console.log('Processing add for Zamestnanec');
          query = 'INSERT INTO Zamestnanec (Meno, Priezvisko, Pozícia) VALUES (?, ?, ?)';
          queryParams = [data.Meno, data.Priezvisko, data.Pozícia];
          break;
      default:
          console.log('Error: Table not found.');
          return res.status(404).send('Table not found.');
  }

  console.log(`Executing query: ${query}`);
  // Выполнение запроса к базе данных
  db.query(query, queryParams, (error, results) => {
      if (error) {
          console.log(`Error adding data: ${error.message}`);
          return res.status(500).send(`Error adding data: ${error.message}`);
      }
      console.log('Data added successfully.');
      res.status(200).json({ message: 'Data added successfully.', insertId: results.insertId });
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
