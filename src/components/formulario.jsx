import ListadoPacientes from './listadoPacientes'
import { useState, useEffect } from 'react'
import Error from './error'


const Formulario = ({pacientes,setPacientes}) => {
  const [nombre, setNombre] = useState('') //tomamos el valor del input y lo guardamos en la variable nombre
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    //validacon de formulario
    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
        console.log('Hay Al Menos un campo vacio')
        setError(true)
        return;  
    } 

    setError(false)
    
    //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

    //objeto paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }
    
    setPacientes([...pacientes, objetoPaciente]) // el spred hace una copia del array y lo concatena con el objeto paciente y con setpaciente modificamos pacientes agregando un nuevo elemento 
    
    
  }

  return (
    <div className="lg:w-2/5 mx-5 -mt-8 ">

      <h2 className="font-black text-2xl text-center ">INGLESO DE PACIENTES</h2>


      <form onSubmit={Submit} className="bg-white mt-8 " >
       
      { error &&  <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="md-5">
          <label htmlfor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota: </label>
          <input
            id="mascota"
            type="text" placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="md-5">
          <label htmlfor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario: </label>
          <input
            id="propietario"
            type="text" placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="md-5">
          <label htmlfor="email" className="block text-gray-700 uppercase font-bold">Email: </label>
          <input
            id="email"
            type="email" placeholder="Email del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="md-5">
          <label htmlfor="alta" className="block text-gray-700 uppercase font-bold">Alta: </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="md-5">
          <label htmlfor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas: </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas" 
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}/>
        </div>
        <input
            type="submit"
            className="bg-green-700 w-full p-3 text-white uppercase font-bold hover:bg-green-800 cursor-pointer transition-colors rounded"
            value= {'Agregar Paciente'}
        />
      </form>
    </div>




  )
}


export default Formulario