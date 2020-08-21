import React, { Fragment, useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import ListadoGastos from './components/ListadoGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //Definir State 
  const [cuenta, setCuenta] = useState(0);
  const [restante, setRestante] = useState(0);
  const [agregarpregunta, setAgregarpregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  const setNuevoGasto = gasto => {
    setGastos([...gastos, gasto])
  }

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido contenido-principal">
            {agregarpregunta ?
              <Pregunta
                setCuenta={setCuenta}
                setRestante={setRestante}
                setAgregarpregunta={setAgregarpregunta}
              />
              :
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setNuevoGasto={setNuevoGasto}
                  />
                </div>
                <div className="one-half column">
                  <ListadoGastos
                    gastos={gastos}
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
