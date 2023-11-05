import Paciente from "./paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="lg:w-3/5 md:h-screen overflow-y-scroll  border-2 rounded-md -mt-8 " >

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center mt-5">Listado Pacientes</h2>


                    { pacientes.map( (paciente) => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-2xl ">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 ">
                        Agregue Nuevos Pacientes {''}
                        
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes;