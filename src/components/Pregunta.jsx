import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({ setCuenta, setRestante, setAgregarpregunta }) => {

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
        if (presupuesto < 1 || isNaN(presupuesto)) {
            setError(true);
            return;     //cortar la ejecucion.
        }

        // Si se pasa la validacion
        setError(false);
        setCuenta(presupuesto);
        setRestante(presupuesto);
        setAgregarpregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
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

Pregunta.propTypes = {
    setCuenta: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setAgregarpregunta: PropTypes.func.isRequired
}

export default Pregunta;