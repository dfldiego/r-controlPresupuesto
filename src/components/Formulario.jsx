import React, { Fragment, useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Formulario = () => {

    //Creo los states
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //Cuando el usuario agrega un gasto
    const agregarGastos = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        //construir el gasto
        const gasto = {
            nombre: nombre,
            cantidad: cantidad,
            id: shortid.generate()
        }
        console.log(gasto);

        //Pasar el gasto al componente principal

        //resetear el form

    }

    return (
        <Fragment>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}
            <form
                onSubmit={agregarGastos}
            >
                <label>Nombre Gasto:</label>
                <input
                    type="text"
                    name="nombreGasto"
                    placeholder="Ej. Transporte"
                    className="u-full-width"
                    onChange={e => setNombre(e.target.value)}
                />
                <label>Cantidad Gasto:</label>
                <input
                    type="number"
                    name="cantidadGasto"
                    placeholder="Ej. 300"
                    className="u-full-width"
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    value="Agregar Gasto"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    );
}

export default Formulario;