import React, { Fragment, useState } from 'react'

const Formulario = () => {

    //Creo los states
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);

    //Cuando el usuario agrega un gasto
    const agregarGastos = e => {
        e.preventDefault();

        // Validar

        //construir el gasto

        //Pasar el gasto al componente principal

        //resetear el form

    }

    return (
        <Fragment>
            <h2>Agrega tus gastos aquí</h2>
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