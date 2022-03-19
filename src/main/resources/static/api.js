
const nextBtn = document.querySelector("#btn-next");
const prevBtn = document.querySelector("#btn-previous");
const searchBtn = document.querySelector('#btn-form');
// Find a <table> element with id="tabla":
var table = document.getElementById("tabla");
var pagina = 1;
var nombre = null;
var estado = null;
var species = null;
var type = null;
var gender = null;

async function mostrarAplicants(){

    fetch("/api/aplicant") //Devuelve una promise
            .then(response =>  response.json())
            .then(data => {
                console.log(data)
                /*if(data.error){
                    document.querySelector('h1').innerHTML = "Not found";
                    return;
                }*/
                


                //Miramos a ver si hay más páginas antes o después de la actual
                
                for(let i = 0;i<data.length;i++){
                    
                    // Create an empty <tr> element and add it to the last position of the table:
                    var row = table.insertRow();

                    // Insert new cells (<td> elements) of the "new" <tr> element:
                    var cell1 = row.insertCell(0);
                    cell1.classList.add('align-middle');
                    var cell2 = row.insertCell(1);
                    cell2.classList.add('align-middle');
                    var cell3 = row.insertCell(2);
                    cell3.classList.add('align-middle');
                    var cell4 = row.insertCell(3);
                    cell4.classList.add('align-middle');
                    var cell5 = row.insertCell(4);
                    cell5.classList.add('align-middle');
                    var cell6 = row.insertCell(5);
                    cell6.classList.add('align-middle');
                    var cell7 = row.insertCell(6);
                    cell7.classList.add('align-middle');
                    var cell8 = row.insertCell(7);
                    cell8.classList.add('align-middle');
                    //var cell2 = row.insertCell(1);

                    // Add some text to the new cells:
                    cell1.innerHTML = data[i].name;
                    cell2.innerHTML = data[i].surname;
                    cell3.innerHTML = data[i].address;
                    cell4.innerHTML = data[i].email;
                    cell5.innerHTML = data[i].city;
                    cell6.innerHTML = data[i].country;
                    cell7.innerHTML = data[i].zip;
                    cell8.innerHTML = data[i].cv;

                }

        })
    
}

document.addEventListener('DOMContentLoaded',mostrarAplicants())



