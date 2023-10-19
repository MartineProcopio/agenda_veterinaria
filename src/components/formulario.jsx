const Formulario = () => {
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5 mt-10">
       
        <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} 
          <span className="text-green-700 font-bold ">Administralos</span>
        </p>

          <from className="bg-white ">
            <div className="md-5">
              <label htmlfor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota: </label>
              <input
                id="mascota"
                type="text" placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div>  
            <div className="md-5">
              <label htmlfor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario: </label>
              <input
                id="propietario"
                type="text" placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div> 
            <div className="md-5">
              <label htmlfor="email" className="block text-gray-700 uppercase font-bold">Email: </label>
              <input
                id="email"
                type="email" placeholder="Email del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div> 
           
            <div className="md-5">
              <label htmlfor="alta" className="block text-gray-700 uppercase font-bold">Alta: </label>
              <input
                id="alta"
                type="date" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                />
            </div> 
            <div className="md-5">
              <label htmlfor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas: </label>
                <textarea
                  id="sintomas"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  placeholder="Describe los sintomas"/>
            </div>
            <input
              id="alta"
              type="submit" 
              className="bg-green-700 w-full p-3 text-white uppercase font-bold hover:bg-green-800 cursor-pointer transition-colors"
              value="Agregar Paciente"
              />
          </from>

  
        
      
      </div>
    )
  }
  
  export default Formulario