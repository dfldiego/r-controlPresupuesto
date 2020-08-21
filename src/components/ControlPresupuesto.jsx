import React, { Fragment } from 'react'
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

export default ControlPresupuesto;