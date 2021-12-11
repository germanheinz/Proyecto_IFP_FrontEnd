import { init } from './ingresosEgresosList';
import '../css/componentes.css';
import '../css/style.css';

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
const createIngresosEgresos = async() => {
    try {
        const resp = await fetch(url + '/ingresosEgresos')



    } catch (error) {
        
    }
}