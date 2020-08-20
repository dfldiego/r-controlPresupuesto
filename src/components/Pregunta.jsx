import React, { Fragment, useState } from 'react'

const Pregunta = () => {

    // State de Presupuesto
    const [presupuesto, setPresupuesto] = useState(0);

    // State de error
    const [error, setError] = useState(false);

    // Funcion que lee el presupuesto. 10 -> en base 10
    const handleChange = e => {
        setPresupuesto(parseInt(e.target.value, 10));
    }

    // Funcion submit para definir el presupuesto
    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        console.log(presupuesto);
        if (presupuesto < 1 || isNaN(presupuesto)) {
            setError(true);
            return;     //cortar la ejecucion.
        }

        // Si se pasa la validacion
        setError(false);

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