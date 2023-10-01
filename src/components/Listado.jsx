import { useState } from 'react';

const Listado = ({ baseColaboradres }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Telefono</th>
                </tr>
            </thead>
            <tbody>
                {baseColaboradres.map((colaborador) => (
                    <tr>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Listado
