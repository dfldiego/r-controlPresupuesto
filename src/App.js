import React, { Fragment, useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {

  //Definir State 
  const [cuenta, setCuenta] = useState(0);
  const [restante, setRestante] = useState(0);
  const [agregarpregunta, setAgregarpregunta] = useState(true);

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
              <div class="row">
                <div class="one-half column">
                  <Formulario />
                </div>
                <div class="one-half column">2</div>
              </div>
            }
          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
