import { init, saveIngresoEgreso } from './js/ingresosEgresosList';

document.getElementById('details').style.display = 'none';

document.getElementById('home').addEventListener("click", function(event){
    document.getElementById('details').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

document.getElementById('createEdit').addEventListener("click", function(event){
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('details').style.display = 'block';
});



document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    let title       = document.getElementById("myForm").elements[0].value;
    let price       = document.getElementById("myForm").elements[1].value;
    let description = document.getElementById("myForm").elements[2].value;
    console.log(title);
    console.log(price);
    console.log(description);
    
    saveIngresoEgreso(title, description, price, '' );

    });


init(); 

