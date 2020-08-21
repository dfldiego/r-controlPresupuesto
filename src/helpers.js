//Es un archivo con muchas funciones que se pueden utilizar en todo el proyecto.
//nos permite disminuir la cantidad de codigo en los componentes.

export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if ((presupuesto / 4) > restante) {
        clase = 'alert alert-danger';
    } else if ((presupuesto / 2) > restante) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }
    return clase;
}