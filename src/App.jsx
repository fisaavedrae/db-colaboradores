import { useState } from 'react'
import { BaseColaboradores } from "./components/BaseColaboradores.js"
import Titulo from './components/Titulo.jsx'
import Listado from './components/Listado.jsx'
import Formulario from './components/Formulario.jsx'
import Alert from './components/Alert.jsx'
import Buscador from './components/Buscador.jsx'
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [busquedaColaboradores, setbusquedaColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({
    error: false,
    msg: "",
    color: "success",
  })

  const enviarFormulario = (nuevoColaborador) => {
    setColaboradores([
      ...colaboradores,
      { id: obtenerId(), nombre: nuevoColaborador.nombre, correo: nuevoColaborador.correo, edad: nuevoColaborador.edad, cargo: nuevoColaborador.cargo, telefono: nuevoColaborador.telefono },
    ])
    setbusquedaColaboradores(colaboradores)
  }

  const enviarFormularioBusqueda = (busqueda) => {
    setAlert("")
    setColaboradores(busquedaColaboradores)
    let textoBusqueda = ""

    const resultadoBusqueda = busquedaColaboradores.filter(function (colaborador) {
      textoBusqueda = colaborador.nombre.toUpperCase() + " " + colaborador.correo.toUpperCase() + " " + colaborador.edad.toUpperCase() + " " + colaborador.cargo.toUpperCase() + " " + colaborador.telefono.toUpperCase()
      if (textoBusqueda.includes(busqueda.toUpperCase())) {
        return true
      }
    }, busqueda)
    setColaboradores([...resultadoBusqueda])
  }

  const eliminarColaborador = (colaborador) => {
    const colaboradorEliminado = colaboradores.filter((el) => el.id !== colaborador.id)
    setColaboradores(colaboradorEliminado)
    setbusquedaColaboradores(colaboradorEliminado)
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
        <div className="container d-flex flex-row" id="busqueda">
          <Buscador onSubmit={enviarFormularioBusqueda} />
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
