import React, { Fragment, useState } from 'react'

const Pregunta = () => {

    // State de Presupuesto
    const [presupuesto, setPresupuesto] = useState(0);

    // Funcion que lee el presupuesto. 10 -> en base 10
    const handleChange = e => {
        setPresupuesto(parseInt(e.target.value, 10));
    }

    // Funcion submit para definir el presupuesto
    const handleSubmit = e => {
        e.preventDefault();

        //Validar

        // Si se pasa la validacion

    }

    return (
        <Fragment>

            <h2>Coloca tu Presupuesto</h2>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;