const ListadoPacientes = () => {
    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
  
  
              <>
                  <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                  <p className="text-xl mt-5 mb-10 text-center">
                      Administra tus {''}
                      <span className="text-green-700 font-bold ">Pacientes y Citas</span>
                  </p>
                <h2 className="font-black text-3x1 text-center"> No hay pacientes</h2>
                  <p className="font-black text-3x1 text-center">
                    Comienza agregando pacientes 
                    <span className="font-bold text-green-700"> y apareceran en este lugar</span>
                  </p>
                 
              </>
          
      </div>
    )
  }
  export default ListadoPacientes  