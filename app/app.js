document.addEventListener("DOMContentLoaded", function () {
  let selectedTable = "";

  function deleteAction() {
    const container = document.getElementById("data-container");
    container.innerHTML = "";

    const formContainer = document.createElement("form");
    formContainer.className = "delete-form";

    
    const input = document.createElement("input");
    input.id = "rowIdInput";
    input.type = "number";
    input.placeholder = "Enter ID to be deleted";
    const submitButton = document.createElement("button");
    submitButton.id = "submitButton";
    submitButton.type = "submit";
    submitButton.innerText = "Delete";

   
    formContainer.addEventListener("submit", function (event) {
      event.preventDefault();
      const rowIdInput = document.getElementById("rowIdInput");
      const rowId = parseInt(rowIdInput.value);

     
      fetch(`http://localhost:3000/${selectedTable}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: rowId }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data deleted successfully:", data);
          
          fetchData(selectedTable);
        })
        .catch((error) => {
          console.error("Error deleting the data:", error);
          
          response.text().then((text) => {
            console.log("Server responce:", text);
          });
        });
    });

    formContainer.appendChild(input);
    formContainer.appendChild(submitButton);
    container.appendChild(formContainer);
  }
  function showDefaultState() {
    const container = document.getElementById("data-container");
    container.innerHTML = "";
    const firstButton = document.createElement("button");
    firstButton.id = "firstButton";
    firstButton.textContent = "Vystavna Sala";
    container.appendChild(firstButton);

    const secondButton = document.createElement("button");
    secondButton.id = "secondButton";
    secondButton.textContent = "Exponat";
    container.appendChild(secondButton);

    const thirdButton = document.createElement("button");
    thirdButton.id = "thirdButton";
    thirdButton.textContent = "kategoria";
    container.appendChild(thirdButton);

    const fourthButton = document.createElement("button");
    fourthButton.id = "fourthButton";
    fourthButton.textContent = "Zamestnanec";
    container.appendChild(fourthButton);

    const firstJoin = document.createElement("button");
    firstJoin.innerText = "First Join"
    container.appendChild(firstJoin);
    firstJoin.addEventListener("click", function(){
      fetchAndDisplayExponatySKategoriou();
    })

    
    const secondJoin = document.createElement("button");
    secondJoin.innerText = "Second Join"
    container.appendChild(secondJoin);
    secondJoin.addEventListener("click", function(){
      fetchAndDisplayExponatyPoSale();
    })

    const thirdJoin = document.createElement("button");
    thirdJoin.innerText = "Third Join"
    container.appendChild(thirdJoin);
    thirdJoin.addEventListener("click", function(){
      fetchAndDisplayExponatyVypozicane2022();
    })




    firstButton.addEventListener("click", function () {
      selectedTable = "Výstavná_sála";
      fetchVystavnaSala();
    });

    secondButton.addEventListener("click", function () {
      selectedTable = "exponat";
      fetchExponat();
    });

    thirdButton.addEventListener("click", function () {
      selectedTable = "Kategória_exponátu";
      fetchKategoria();
    });

    fourthButton.addEventListener("click", function () {
      selectedTable = "Zamestnanec";
      fetchZamestnanec();
    });
  }

  function removeTableControls(container) {
    const existingControls =
      container.parentNode.querySelector(".table-controls");
    if (existingControls) {
      existingControls.parentNode.removeChild(existingControls);
    }
  }

  function createTable(data) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headers = Object.keys(data[0]);
    const headerRow = document.createElement("tr");
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    data.forEach((item) => {
      const row = document.createElement("tr");
      headers.forEach((headerText) => {
        const cell = document.createElement("td");
        cell.textContent = item[headerText];
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    return table;
  }

  function addTableControls(container, addAction, deleteAction, editAction) {
    const controlDiv = document.createElement("div");
    controlDiv.classList.add("table-controls");

    const addButton = document.createElement("button");
    addButton.textContent = "Add data";
    addButton.addEventListener("click", addAction);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete data";
    deleteButton.addEventListener("click", deleteAction);

  

    controlDiv.appendChild(addButton);
    controlDiv.appendChild(deleteButton);


    container.appendChild(controlDiv);
  }

  function fetchVystavnaSala() {
    const container = document.getElementById("data-container");
    container.innerHTML = "";
    fetch("http://localhost:3000/vystavna_sala")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          const table = createTable(data);
          container.appendChild(table);

          removeTableControls(container);

          addTableControls(
            container,
            function () {
              const container = document.getElementById("data-container");
    container.innerHTML = "";

    const formContainer = document.createElement("form");
    formContainer.className = "add-form";


    const fields = [
        { name: "Názov_sály", type: "text", placeholder: "Enter name" }
    
    ];

    fields.forEach(field => {
        const input = document.createElement("input");
        input.name = field.name;
        input.type = field.type;
        input.placeholder = field.placeholder;
        formContainer.appendChild(input);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Add to Výstavná sála";
    formContainer.appendChild(submitButton);

    formContainer.onsubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(formContainer);
        const vystavnaSalaData = {};
        formData.forEach((value, key) => {
            vystavnaSalaData[key] = value;
        });

        fetch('http://localhost:3000/Výstavná_sála/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vystavnaSalaData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Výstavná sála was added:', data);
           
        })
        .catch(error => {
            console.error('Error adding data to Výstavná sála:', error);
        });
    };

    container.appendChild(formContainer);
            },
            function () {
              deleteAction();
            },
            function () {
              console.log("Изменить строку");
            }
          );
        } else {
          const div = document.createElement("div");
          div.textContent = "No data available.";
          container.appendChild(div);
        }

        const mainButton = document.createElement("button");
        mainButton.textContent = "Go to Main page";
        mainButton.id = "mainPage";
        container.appendChild(mainButton);

        mainButton.addEventListener("click", showDefaultState);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  function fetchExponat() {
    const container = document.getElementById("data-container");
    container.innerHTML = "";
    fetch("http://localhost:3000/exponat")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          const table = createTable(data);
          container.appendChild(table);

          removeTableControls(container);

          addTableControls(
            container,
            function () {
              const container = document.getElementById("data-container");
              container.innerHTML = ""; 
          
              const formContainer = document.createElement("form");
              formContainer.className = "add-form";
          
              const fields = [
                  { name: "ID_exponátu", type: "number", placeholder: "exponat ID" },
                  { name: "Názov", type: "text", placeholder: "exponat name" },
                  { name: "Očakávaný_vek", type: "number", placeholder: "approx. age" },
                  { name: "Cena", type: "number", placeholder: "price" },
                  { name: "Druh", type: "text", placeholder: "type" },
                  { name: "Krajina_pôvodu", type: "text", placeholder: "state of origin" },
                  { name: "Popis", type: "text", placeholder: "derscription" },
                  { name: "Datum_zapôžičania", type: "date", placeholder: "start date" },
                  { name: "Datum_vrátenia", type: "date", placeholder: "return date" },
                  { name: "ID_zamestnanca", type: "number", placeholder: "staff ID" },
                  { name: "ID_výstavnej_sály", type: "number", placeholder: "sala ID" },
                  { name: "Vitrína", type: "text", placeholder: "shopwindow" },
                  { name: "ID_kategórie", type: "number", placeholder: "category ID" }
              ];
          
              fields.forEach(field => {
                  const input = document.createElement("input");
                  input.name = field.name;
                  input.type = field.type;
                  input.placeholder = field.placeholder;
                  formContainer.appendChild(input);
              });
          
              const submitButton = document.createElement("button");
              submitButton.type = "submit";
              submitButton.innerText = "Add exponat";
              formContainer.appendChild(submitButton);
          
              formContainer.onsubmit = function(event) {
                  event.preventDefault();
                  const formData = new FormData(formContainer);
                  const exponatData = {};
                  formData.forEach((value, key) => {
                      exponatData[key] = value;
                  });
          
                  fetch('http://localhost:3000/exponat/add', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(exponatData),
                  })
                  .then(response => response.json())
                  .then(data => {
                      console.log('Exponát added:', data);
                  })
                  .catch(error => {
                      console.error('Error adding Exponát:', error);
                  });
              };
          
              container.appendChild(formContainer);
            },
            function () {
              deleteAction();
            },
            function () {
              console.log("Изменить строку");
            }
          );
        } else {
          const div = document.createElement("div");
          div.textContent = "No data available.";
          container.appendChild(div);
        }

        const mainButton = document.createElement("button");
        mainButton.textContent = "Go to Main page";
        mainButton.id = "mainPage";
        container.appendChild(mainButton);

        mainButton.addEventListener("click", showDefaultState);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  function fetchKategoria() {
    const container = document.getElementById("data-container");
    container.innerHTML = "";
    fetch("http://localhost:3000/kategoria_exponatu")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          const table = createTable(data);
          container.appendChild(table);

          removeTableControls(container);

          addTableControls(
            container,
            function () {
              const container = document.getElementById("data-container");
    container.innerHTML = "";

    const formContainer = document.createElement("form");
    formContainer.className = "add-form";

    const fields = [
        { name: "Názov_kategórie", type: "text", placeholder: "Type category name" }
    ];

    fields.forEach(field => {
        const input = document.createElement("input");
        input.name = field.name;
        input.type = field.type;
        input.placeholder = field.placeholder;
        formContainer.appendChild(input);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerText = "Add category";
    formContainer.appendChild(submitButton);

    formContainer.onsubmit = function(event) {
        event.preventDefault();
        const formData = new FormData(formContainer);
        const kategoriaData = {};
        formData.forEach((value, key) => {
            kategoriaData[key] = value;
        });

        fetch('http://localhost:3000/Kategória_exponátu/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(kategoriaData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Kategória exponátu was added:', data);
        })
        .catch(error => {
            console.error('Error adding Kategória exponátu:', error);
        });
    };

    container.appendChild(formContainer);
            },
            function () {
              deleteAction();
            },
            function () {
              console.log("Change the row");
            }
          );
        } else {
          const div = document.createElement("div");
          div.textContent = "No data available.";
          container.appendChild(div);
        }

        const mainButton = document.createElement("button");
        mainButton.textContent = "Go to Main page";
        mainButton.id = "mainPage";
        container.appendChild(mainButton);

        mainButton.addEventListener("click", showDefaultState);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }

  function fetchZamestnanec() {
    const container = document.getElementById("data-container");
    container.innerHTML = "";
    fetch("http://localhost:3000/Zamestnanec")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          const table = createTable(data);
          container.appendChild(table);

          removeTableControls(container);

          addTableControls(
            container,
            function () {
              const container = document.getElementById("data-container");
              container.innerHTML = "";
          
              const formContainer = document.createElement("form");
              formContainer.className = "add-form";
          
              const fields = [
                  { name: "Meno", type: "text", placeholder: "Type staff name" },
                  { name: "Priezvisko", type: "text", placeholder: "Type staff surname" },
                  { name: "Pozícia", type: "text", placeholder: "Type position" }
              ];
          
              fields.forEach(field => {
                  const input = document.createElement("input");
                  input.name = field.name;
                  input.type = field.type;
                  input.placeholder = field.placeholder;
                  formContainer.appendChild(input);
              });
          
              const submitButton = document.createElement("button");
              submitButton.type = "submit";
              submitButton.innerText = "Add staff";
              formContainer.appendChild(submitButton);
          
              formContainer.onsubmit = function(event) {
                  event.preventDefault();
                  const formData = new FormData(formContainer);
                  const zamestnanecData = {};
                  formData.forEach((value, key) => {
                      zamestnanecData[key] = value;
                  });
          
                  fetch('http://localhost:3000/Zamestnanec/add', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(zamestnanecData),
                  })
                  .then(response => response.json())
                  .then(data => {
                      console.log('Zamestnanec was added:', data);
                  })
                  .catch(error => {
                      console.error('Error adding Zamestnanec:', error);
                  });
              };
          
              container.appendChild(formContainer);
            },
            function () {
              deleteAction();
            },
            function () {
              console.log("Изменить строку");
            }
          );
        } else {
          const div = document.createElement("div");
          div.textContent = "No data available.";
          container.appendChild(div);
        }

        const mainButton = document.createElement("button");
        mainButton.textContent = "Go to Main page";
        mainButton.id = "mainPage";
        container.appendChild(mainButton);

        mainButton.addEventListener("click", showDefaultState);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });

  }

  showDefaultState();
});


function fetchAndDisplayExponatySKategoriou() {
  fetch('http://localhost:3000/api/exponaty-kategoria')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('data-container');
      container.innerHTML = '';
      const table = document.createElement('table');
      table.innerHTML = '<tr><th>Názov Exponátu</th><th>Popis</th><th>Kategória</th></tr>';
      data.forEach(item => {
          const row = `<tr><td>${item.nazov}</td><td>${item.Popis}</td><td>${item.kategoria}</td></tr>`;
          table.innerHTML += row;
      });
      container.appendChild(table);
  })
  .catch(error => console.error('Error fetching data:', error));
}

function fetchAndDisplayExponatyPoSale() {
  fetch('http://localhost:3000/api/exponaty-count-sala')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('data-container');
      container.innerHTML = '';
      const table = document.createElement('table');
      table.innerHTML = '<tr><th>Výstavná Sála</th><th>Počet Exponátov</th></tr>';
      data.forEach(item => {
          const row = `<tr><td>${item.sala}</td><td>${item.count}</td></tr>`;
          table.innerHTML += row;
      });
      container.appendChild(table);
  })
  .catch(error => console.error('Error fetching data:', error));
}
function fetchAndDisplayExponatyVypozicane2022() {
  fetch('http://localhost:3000/api/exponaty-vypozicane-2022')
  .then(response => response.json())
  .then(data => {
      const container = document.getElementById('data-container');
      container.innerHTML = '';
      const table = document.createElement('table');
      table.innerHTML = '<tr><th>Názov</th><th>Dátum Vypožičania</th><th>Dátum Vrátenia</th></tr>';
      data.forEach(item => {
          const row = `<tr><td>${item.Názov}</td><td>${item.Datum_zapôžičania}</td><td>${item.Datum_vrátenia}</td></tr>`;
          table.innerHTML += row;
      });
      container.appendChild(table);
  })
  .catch(error => console.error('Error fetching data:', error));
}


