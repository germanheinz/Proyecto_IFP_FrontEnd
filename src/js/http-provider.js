import '../css/componentes.css';
import '../css/style.css';
import {moment} from '../../node_modules/moment';

const url = 'https://walletcheckifp.herokuapp.com';

export const obtenerIngresosEgresos = async() => {
    try {
        const resp = await fetch(url + '/ingresosEgresos')

        if(!resp.ok) throw 'no response'

        const ingresosEgresos = resp.json();

        return ingresosEgresos;

    } catch (error) {
        
    }
}
export const createIngresosEgresos = async(ingresoEgreso) => {
    try {
        const resp = await fetch(url + '/ingresosEgresos', {
            method: 'POST',
            body: JSON.stringify(ingresoEgreso),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(await resp.json());

    } catch (error) {
        
    }
}

const deleteIngresosEgresos = async() => {
    try {
        const resp = await fetch(url + '/ingresosEgresos')

    } catch (error) {
        
    }
}
const updateIngresosEgresos = async() => {
    try {
        const resp = await fetch(url + '/ingresosEgresos')

    } catch (error) {
        
    }
}

// export const getTime = moment().format("MMM Do YY");