import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers';


const ControlPresupuesto = ({ cuenta, restante }) => {

    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {cuenta}
            </div>
            <div className={revisarPresupuesto(cuenta, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    cuenta: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
}

export default ControlPresupuesto;