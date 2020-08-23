import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ gasto, gastos, setGastos, restante, setRestante }) => {
    const { id, nombre, cantidad } = gasto;

    const eliminarGasto = e => {
        console.log("hizo click");
        // Eliminar Gasto seleccionado y actualizar la lista de Gastos. ---------------LISTO---------------
        const gastosActualizados = gastos.filter(gastoArr => gastoArr.id !== id);
        setGastos(gastosActualizados);
        // Obtener restante nuevo y pasarlo al setRestante
        const restanteNuevo = restante + cantidad;
        setRestante(restanteNuevo);
    }

    return (
        <Fragment>
            <tbody>
                <tr className="gastos">
                    <td>
                        <span>{nombre}</span>
                    </td>
                    <td>
                        <span className="gasto">${cantidad}</span>
                    </td>
                    <td className="pointer" onClick={eliminarGasto}>
                        <span className="gasto-rojo">
                            <i className="fas fa-trash"></i>
                        </span>
                    </td>
                </tr>
            </tbody>
        </Fragment>
    )
};

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;