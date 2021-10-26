import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [mensaje, setMensaje] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then(respuesta => respuesta.json())
      .then(respuestaJson => setTimeout(() => setMensaje(respuestaJson.mensaje), 2000))
      .catch(error => {
        setMensaje("Hubo un error al obtener el mensaje del servidor.");
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!mensaje ? "Cargando mensaje del servidor..." : mensaje}</p>
      </header>
    </div>
  );
}

export default App;
