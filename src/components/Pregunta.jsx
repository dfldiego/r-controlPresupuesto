import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({ setCuenta, cuenta, gastos, restante, setRestante, setAgregarpregunta }) => {
    // State de Presupuesto
    const [presupuesto, setPresupuesto] = useState(cuenta);
    // State de error
    const [error, setError] = useState(false);

    //useEffect para restante
    useEffect(() => {
        let valorRestanteInicial = presupuesto;
        // restante es igual presupuesto - cantidad de gastos
        if (gastos.length === 0) {  //si no hay gastos -> restante = presupuesto
            setRestante(presupuesto);
        } else {
            gastos.forEach(gasto => {
                valorRestanteInicial = valorRestanteInicial - gasto.cantidad;
                setRestante(valorRestanteInicial);
            });
        }
    }, [setRestante, presupuesto, gastos])

    // Funcion que lee el presupuesto. 10 -> en base 10
    const handleChange = e => {
        setPresupuesto(parseInt(e.target.value), 10);
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
        if (gastos.length === 0) {
            setRestante(presupuesto)
        } else {

        }
        setAgregarpregunta(false);
        localStorage.setItem('presupuestoInicial', JSON.stringify(presupuesto));
        localStorage.setItem('restanteInicial', JSON.stringify(restante));
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
                    value={presupuesto}
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
    cuenta: PropTypes.number.isRequired,
    gastos: PropTypes.array.isRequired,
    restante: PropTypes.number.isRequired,
    setRestante: PropTypes.func.isRequired,
    setAgregarpregunta: PropTypes.func.isRequired
}
export default Pregunta;