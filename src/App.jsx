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
    ingreso: false,
    busqueda: false,
  })

  const enviarFormulario = (nuevoColaborador) => {

    setColaboradores([
      ...colaboradores,
      { id: obtenerId(), nombre: nuevoColaborador.nombre, correo: nuevoColaborador.correo, edad: nuevoColaborador.edad, cargo: nuevoColaborador.cargo, telefono: nuevoColaborador.telefono },
    ])
    setbusquedaColaboradores(colaboradores)
  }

  const enviarFormularioBusqueda = (busqueda) => {
    console.log("Valor de tarea recibido desde Buscador.jsx: ", busqueda)
    console.log("Antes de busqueda: Estado Colaborador:", colaboradores)
    console.log("Antes de busqueda: Estado Colaborador:", busquedaColaboradores)
    setColaboradores(busquedaColaboradores)
    if (busqueda) {
      const resultadoBusqueda = colaboradores.filter(function (colaborador) {
        return colaborador.nombre.indexOf(busqueda) > 0 || colaborador.correo.indexOf(busqueda) > 0 || colaborador.edad.indexOf(busqueda) > 0 || colaborador.cargo.indexOf(busqueda) > 0 || colaborador.telefono.indexOf(busqueda) > 0
      }, busqueda)
      console.log("Realizado busqueda: resultadoBusqueda de: " + busqueda + " Resultado: ", resultadoBusqueda)
      setColaboradores([...resultadoBusqueda])
    }
    console.log("Despues de busqueda: Estado Colaborador:", colaboradores)
    console.log("Despues de busqueda: Estado Colaborador:", busquedaColaboradores)
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
