import Paciente from "./paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente,editar,setEditar }) => {
    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll border-2 rounded-md -mt-14">
  
        {pacientes && pacientes.length ? /* controlamos si hay pacientes o no */ (
          <>
            <h2 className="font-black text-3xl text-center mb-5 mt-2">Listado  de Pacientes</h2>
  
  
            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                editar={editar}
                setEditar={setEditar}
                
              />
            ))}
          </>
  
        ) : ( //si no tiene nada solo retornamos el encabezado
          <>
            <h2 className="font-black text-2xl text-center mt-10">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Agregue Nuevos Pacientes
            </p>
          </>
        )}
      </div>
    )
  }
  
  export default ListadoPacientes;