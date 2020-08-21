import React, { Fragment } from 'react'

const ControlPresupuesto = ({ cuenta, restante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {cuenta}
            </div>
            <div className="alert">
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}

export default ControlPresupuesto;