import React, { Fragment, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import ListadoGastos from './components/ListadoGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  // Local Storage para los gastos
  let gastosIniciales = JSON.parse(localStorage.getItem('gastoInicial'));
  if (!gastosIniciales) {
    gastosIniciales = [];
  }

  // Cuenta-PresupuestoInicial
  let cantidadPresupuesto = JSON.parse(localStorage.getItem('presupuestoInicial'));
  if (!cantidadPresupuesto) {
    cantidadPresupuesto = 0;
  }
  // restante
  let restanteInicial = JSON.parse(localStorage.getItem('restanteInicial'));
  if (!restanteInicial) {
    restanteInicial = 0;
  }

  //Definir State 
  const [cuenta, setCuenta] = useState(parseInt(cantidadPresupuesto));
  const [restante, setRestante] = useState(restanteInicial);
  const [agregarpregunta, setAgregarpregunta] = useState(true);
  const [gastos, setGastos] = useState(gastosIniciales);
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false);

  //useEffect para LocalStorage de Restante
  useEffect(() => {
    localStorage.setItem('restanteInicial', JSON.stringify(restante));
  }, [restante])

  //useEffect para LocalStorage de Gastos.
  useEffect(() => {
    if (gastosIniciales) {
      localStorage.setItem('gastoInicial', JSON.stringify(gastos));
    } else {
      localStorage.setItem('gastoInicial', JSON.stringify([]));
    }
    console.log(gastosIniciales.length);
  }, [gastos, gastosIniciales])

  // UseEffect que actualiza el restante(cada vez que ingresamos un gasto)
  useEffect(() => {
    if (creargasto) {
      //Agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      localStorage.setItem('restanteInicial', JSON.stringify(presupuestoRestante));
      //Resetear el creargasto
      setCreargasto(false);
    }
  }, [gasto, creargasto, gastos, restante])

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Mensual</h1>
          <div className="contenido contenido-principal">
            {agregarpregunta ?
              <Pregunta
                gastos={gastos}
                cuenta={cuenta}
                setCuenta={setCuenta}
                restante={restante}
                setRestante={setRestante}
                setAgregarpregunta={setAgregarpregunta}
              />
              :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    restante={restante}
                    setGasto={setGasto}
                    setCreargasto={setCreargasto}
                    setAgregarpregunta={setAgregarpregunta}
                  />
                </div>
                <div className="one-half column">
                  <ListadoGastos
                    gastos={gastos}
                    setGastos={setGastos}
                    setRestante={setRestante}
                    restante={restante}
                  />
                  <ControlPresupuesto
                    cuenta={cuenta}
                    restante={restante}
                  />
                </div>
              </div>
            }
          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
