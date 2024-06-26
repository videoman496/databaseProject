function fetchData() {
    fetch('http://localhost:3000/vystavna_sala')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = '';
            
            if (data.length === 0) {
                container.innerHTML = '<p>No data to display.</p>';
            } else {
                const ul = document.createElement('ul');
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `ID: ${item.ID_sály}, Name: ${item.Názov_sály}`;
                    ul.appendChild(li);
                });
                container.appendChild(ul);
                const button = document.createElement('button');
                button.innerText = "Delete";
                container.appendChild(button);
                deleteAction();
            }
        })
        .catch(error => {
            console.error('Failed to fetch data:', error);
            const container = document.getElementById('data-container');
            container.innerHTML = `<p>Error loading data: ${error.message}</p>`;
        });
}

function deleteAction() {
    const button = document.querySelector("button");
    button.addEventListener("click", function (event) {
        const rowId = 4;

        fetch(`http://localhost:3000/delete`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: rowId })
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => { throw new Error(text) });
                }
                return response.json();
            })
            .then(data => {
                console.log("Data was successfully deleted:", data);
                fetchData();
            })
            .catch(error => {
                console.error("Eror deleting the data:", error);
            });
    });
    console.log("Delete button is now active.");
}

fetchData();
