const container = document.getElementById('data-container');

// axios.get('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses')
// .then(function(res) {
//     // console.log(res.data);
//     const data = res.data;
//     data.sort((a,b) => {
//         return a.ticketPrice - b.ticketPrice;
//     });

//     data.forEach((element) => {
//         const description = document.createElement('div');
//         description.className = 'description';
//         const json = JSON.stringify(element, 1, 1);
//         description.innerHTML = `<pre>${json}</pre>`
//         container.appendChild(description);
//     })
// }).catch((err) => console.log(err))

axios.get('https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses')
.then(function(res) {
    // console.log(res.data);
    const data = res.data;
    // data.sort((a,b) => {
    //     return a.ticketPrice - b.ticketPrice;
    // });

   const table = document.createElement('table');
   
   const head = document.createElement('thead');

   const properties = Object.keys(data[0]);

   properties.forEach((property) => {
    const th = document.createElement('th');
    th.textContent = property;
    head.appendChild(th);

   });

   table.appendChild(head);

   const tbody = document.createElement('tbody');
   data.forEach((content) => {
    const row = document.createElement('tr');

    properties.forEach((property) => {
        const tdata = document.createElement('td');
        tdata.textContent = content[property];
        row.appendChild(tdata);
    });

    tbody.appendChild(row);
   });

   table.appendChild(tbody);

   container.appendChild(table);
}).catch((err) => console.log(err))