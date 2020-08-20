import React, { Fragment, useState } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h2>Agrega tus gastos aquí</h2>
            <form>
                <label>Nombre Gasto:</label>
                <input
                    type="text"
                    name="nombreGasto"
                    placeholder="Ej. Transporte"
                    className="u-full-width"
                />
                <label>Cantidad Gasto:</label>
                <input
                    type="number"
                    name="cantidadGasto"
                    placeholder="Ej. 300"
                    className="u-full-width"
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