import React from 'react'
import { useState } from 'react';


const Buscador = ({ onSubmit }) => {
    const [buscador, setBuscador] = useState("")
    const handleChange = (e) => {
        alert("presionada la tecla: " + e.target.value)
        setBuscador(e.target.value)
        onSubmit(buscador)
    }
    return (
        <>
            <input type="text" id="buscador" placeholder="Buscar un colaborador" onChange={handleChange} value={buscador} />
        </>
    )
}

Buscador.propTypes = {}

export default Buscador