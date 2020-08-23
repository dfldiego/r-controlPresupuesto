import React, { Fragment } from 'react'
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const ListadoGastos = ({ gastos, setGastos, setRestante, restante }) => (
    <Fragment>
        <div className="gastos-realizados">
            <h2>Listado</h2>
            <table className="u-full-width">
                {gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        gastos={gastos}
                        setGastos={setGastos}
                        restante={restante}
                        setRestante={setRestante}
                    />
                ))}
            </table>
        </div>
    </Fragment >
);

ListadoGastos.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default ListadoGastos;