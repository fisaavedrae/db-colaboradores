import { useState } from 'react'
import { BaseColaboradores } from "./components/BaseColaboradores.js"
import Titulo from './components/Titulo.jsx'
import Listado from './components/Listado.jsx'
import Formulario from './components/Formulario.jsx'
import Alert from './components/Alert.jsx'
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({
    error: false,
    msg: "",
    color: "success",
  })

  const enviarFormulario = (nuevoColaborador) => {
    console.log("Valor de tarea recibido desde Formulario.jsx: ", nuevoColaborador)
    console.log("nombre", nuevoColaborador.correo)

    setColaboradores([
      ...colaboradores,
      { id: obtenerId(), nombre: nuevoColaborador.nombre, correo: nuevoColaborador.correo, edad: nuevoColaborador.edad, cargo: nuevoColaborador.cargo, telefono: nuevoColaborador.telefono },
    ])
  }

  const eliminarColaborador = (colaborador) => {
    const colaboradorEliminado = colaboradores.filter((el) => el.id !== colaborador.id)
    setColaboradores(colaboradorEliminado)
  }
  const obtenerId = () => {
    const listaId = colaboradores.map((el) => el.id)
    listaId.sort().reverse()
    return listaId.length > 0 ? Number(listaId[0]) + 1 : 1
  }

  return (
    <>

      <div className="container" id="principal">
        <div className="container" id="titulo">
          <Titulo titulo="Lista de Colaboradores" />
        </div>
        <div className="container" id="busqueda">
          <input type="text" id="buscador" placeholder="Buscar un colaborador" />
          <button id="boton-buscar" className="btn btn-warning"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className="container  border rounded" id="listado">
          <Listado baseColaboradres={colaboradores} elimina={eliminarColaborador} />
        </div>
        <div className="d-flex flex-column border rounded" id="agregar">
          <Formulario onSubmit={enviarFormulario} setAlert={setAlert} />
          {alert.msg && <Alert color={alert.color} mensaje={alert.msg} />}
        </div>
      </div>

    </>
  )
};

export default App
