
import { obtenerIngresosEgresos } from './http-provider';

const body  = document.body;
let tbody;

const crearHtml = () => {
    
    const div = document.createElement('div');
    body.appendChild( div );
    tbody = document.querySelector('tbody');

}

const crearFilaIngresoEgreso = (ingresoEgreso) => {

    const html = `
        <td scope="col">1</td>
        <td scope="col"> ${ingresoEgreso.title} </td>
        <td scope="col"> ${ingresoEgreso.price} </td>
        <td scope="col"> ${ingresoEgreso.date} </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.appendChild(tr);

}


export const init = async() => {

    crearHtml();

   const ingresoEgresoList = await obtenerIngresosEgresos().then((response) => {
       const { ingresosEgresos } = response;
       return ingresosEgresos;
   });
   ingresoEgresoList.forEach(crearFilaIngresoEgreso);

}
