function Paciente({paciente}) {
  
  
  return (
    <div className="mx-2 shadow-md border-2 rounded-lg px-3 py-3 mt-5">
      <p className="font-bold text-gray-700 text-left">Nombre: <span className="font-normal"> {paciente.nombre}</span>
      </p>
      <p className="font-bold text-gray-700 text-left">Propietario: <span className="font-normal"> {paciente.propietario}</span>
      </p>
      <p className="font-bold text-gray-700 text-left">Email: <span className="font-normal">{paciente.email}</span>
      </p>
      <p className="font-bold text-gray-700 text-left">Fecha de Alta: <span className="font-normal"> {paciente.fecha}</span>
      </p>
      <p className="font-bold text-gray-700 text-left">Sintomas: <span className="font-normal"> {paciente.sintomas}</span>
      </p>

      <div className="flex justify-between mt-1 ">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded uppercase">
          Editar
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded uppercase">
          Eliminar
        </button>
    

      </div>

    </div>



  )
}

export default Paciente;