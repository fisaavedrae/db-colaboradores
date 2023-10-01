import { useState } from 'react';

const Listado = ({ baseColaboradres, elimina }) => {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Telefono</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {baseColaboradres.map((colaborador) => (
                    <tr key={colaborador.id}>
                        <td >{colaborador.id}</td>
                        <td >{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td><i className="fa-solid fa-trash" id='borrar' onClick={() => elimina(colaborador)} ></i></td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}
export default Listado
