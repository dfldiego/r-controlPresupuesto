import React, { Fragment, useState } from 'react';
import Pregunta from './components/Pregunta';

function App() {

  //Definir State 
  const [cuenta, setCuenta] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido contenido-principal">
            <Pregunta
              setCuenta={setCuenta}
              setRestante={setRestante}
            />
          </div>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
