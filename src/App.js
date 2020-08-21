import React, { Fragment, useState, useEffect } from 'react';
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
  const [gasto, setGasto] = useState({});
  const [creargasto, setCreargasto] = useState(false);

  // UseEffect que actualiza el restante(cada vez que ingresamos un gasto)
  useEffect(() => {
    if (creargasto) {
      //Agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //Resetear el creargasto
      setCreargasto(false);
    }


  }, [gasto, creargasto, gastos, restante])

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
                    setGasto={setGasto}
                    setCreargasto={setCreargasto}
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
