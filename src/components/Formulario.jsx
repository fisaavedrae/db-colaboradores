import React from 'react'
import { useState } from 'react';


const Formulario = ({ onSubmit, setAlert }) => {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [edad, setEdad] = useState("")
    const [cargo, setCargo] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        //Validación
        if (nombre === "" || correo === "" || edad === "" || cargo === "" || telefono === "") {
            setAlert({
                error: true,
                msg: "Todos los campos son obligatorios",
                color: "danger",
            });
            return;
        }
        else {
            const nuevoColaborador = { "id": Date.now(), "nombre": nombre, "correo": correo, "edad": edad, "cargo": cargo, "telefono": telefono }
            setAlert({
                error: false,
                msg: "Colaborador agregado exitosamente !",
                color: "success",
            });
            setNombre("")
            setCorreo("")
            setEdad("")
            setCargo("")
            setTelefono("")
            onSubmit(nuevoColaborador)
        }
    }
    return (
        <>
            <h2>Agregar colaborador</h2>
            <form className="d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre del colaborador" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <input type="text" name="correo" placeholder="Email del colaborador" onChange={(e) => setCorreo(e.target.value)} value={correo} />
                <input type="text" name="edad" placeholder="Edad del colaborador" onChange={(e) => setEdad(e.target.value)} value={edad} />
                <input type="text" name="cargo" placeholder="Cargo del colaborador" onChange={(e) => setCargo(e.target.value)} value={cargo} />
                <input type="text" name="telefono" placeholder="Telefono del colaborador" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
                <button id="boton-agregar" className="btn btn-warning">Agregar Colaborador</button>
            </form>
        </>
    )
}

Formulario.propTypes = {}

export default Formulario