import React from 'react'
import { useState } from 'react';


const Buscador = ({ onSubmit }) => {
    const [buscador, setBuscador] = useState("")
    const handleChange = (e) => {
        onSubmit(buscador)
    }
    return (
        <>
            <input type="text" id="buscador" placeholder="Buscar un colaborador" onKeyUp={handleChange} value={buscador} onChange={(e) => setBuscador(e.target.value)} />
        </>
    )
}
export default Buscador