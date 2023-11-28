import { useState, useEffect } from 'react'
import Axios from 'axios' 

function Paciente({ paciente, setPaciente, eliminarPaciente,editar,setEditar }) {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente
 
  const editarPaciente = () =>{
    setEditar(true)
    setPaciente(paciente);
    
    }

  const deletePaciente = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`, {

      }).then((response) =>{
          alert("Paciente Eliminado")
          
      })};

  
  const handleEliminar = () => {
    
    const respuesta = confirm('Deseas eliminar este paciente?');

    if (respuesta) {
      deletePaciente(paciente.id)
      eliminarPaciente(id)
      
    }
  }

  return (
    <div className="mx-5 shadow-md border-2 rounded-lg px-3 py-3">
      <p className="font-bold text-gray-700">Nombre: <span className="font-normal">{nombre}</span>
      </p>
      <p className="font-bold text-gray-700">Propietario: <span className="font-normal"> {propietario}</span>
      </p>
      <p className="font-bold text-gray-700">Email: <span className="font-normal">{email}</span>
      </p>
      <p className="font-bold text-gray-700">Fecha de Alta: <span className="font-normal">{fecha}</span>
      </p>
      <p className="font-bold text-gray-700">Sintomas: <span className="font-normal">{sintomas}</span>
      </p>

      <div className="flex justify-between  ">
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded uppercase mt-1"
          onClick={editarPaciente }>
          Editar
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded uppercase"
        onClick={handleEliminar}>
          Eliminar
        </button>


      </div>

    </div>



  )
}

export default Paciente;