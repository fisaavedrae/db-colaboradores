import { useState } from 'react'
import { BaseColaboradores } from "./components/BaseColaboradores.js"
import Listado from './components/Listado.jsx'
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  return (
    <>

      <div className="container" id="principal">
        <div className="container" id="titulo"><h2>Lista de Colaboradores</h2></div>
        <div className="container" id="busqueda">
          <input type="text" id="buscador" placeholder="Buscar un colaborador" />
          <button id="boton-buscar" className="btn btn-warning"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="container  border rounded" id="listado">
          <Listado baseColaboradres={colaboradores} />
        </div>
        <div className="d-flex flex-column border rounded" id="agregar">
          <h2>Agregar colaborador</h2>
          <form className="d-flex flex-column justify-content-between">
            <input type="text" name="nombre" placeholder="Nombre del colaborador" />
            <input type="text" name="email" placeholder="Email del colaborador" />
            <input type="text" name="edad" placeholder="Edad del colaborador" />
            <input type="text" name="cargo" placeholder="Cargo del colaborador" />
            <input type="text" name="telefono" placeholder="Telefono del colaborador" />
            <button id="boton-agregar" className="btn btn-warning">Agregar Colaborador</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
