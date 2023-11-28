import ListadoPacientes from './listadoPacientes'
import { useState, useEffect } from 'react'
import Error from './error'
import Header from './header'
import Axios from 'axios' 



const Formulario = ({ pacientes, setPacientes, paciente, setPaciente,editar,setEditar}) => {

  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('') //tomamos el valor del input y lo guardamos en la variable nombre
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);
  

  
  const get = () => {
    Axios.get(`http://localhost:3001/pacientes`, {}).then((response) =>{
        
        setPacientes(response.data)
    })};
    
    

    /*const agregarlocalstorage = () =>{
      
      const get = () => {
        Axios.get(`http://localhost:3001/pacientes`, {}).then((response) =>{
            
            setPacientes(response.data)
        })};
        
    if(pacientes !== 0){
        get()
        localStorage.setItem('pacientes', JSON.stringify( pacientes ));
      }};*/
    
    const add = () => {
      Axios.post(`http://localhost:3001/create`, {
          nombre: nombre,
          propietario:propietario,
          email: email,
          fecha: fecha,
          sintomas:sintomas}).then((response) =>{          
          alert(response)})
        get()};

    const update = () => {
      Axios.put(`http://localhost:3001/edit`, {
          id: id,
          nombre: nombre,
          propietario:propietario,
          email: email,
          fecha: fecha,
          sintomas:sintomas
      }).then((response) =>{
          alert('Paciente Actualizado')
          setEditar(false)
      })};

  
 // seteamos paciente para que vuelva al formulario y se pueda editar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setId(paciente.id)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      
      
    }
    
  }, [paciente])

  
  const generarId = () => {
    const randow = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return randow + fecha;
  }

  const Submit = (e) => {
    e.preventDefault();
    //validacon de formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay Al Menos un campo vacio')
      setError(true)
      return;
    }

    setError(false)


    //objeto paciente
    const objetoPaciente = {
      
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      // Editando el Registro
      
      objetoPaciente.id = paciente.id
      
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      
      setPacientes(pacientesActualizados)
      setPaciente({})
     
      } else {
      
      // Nuevo registro
      setId(objetoPaciente.id = generarId());
      
      setPacientes([...pacientes, objetoPaciente]);
      
    }
    
  //Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  const input = () => {
    editar ? update : add
    
  }

 return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 ">
      <br></br>
      <h2 className="font-black text-2xl text-center  mt-14 ">INGRESO DE PACIENTES</h2>


      <form onSubmit={Submit} className="bg-white mt-10 " >

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

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
            onChange={(e) => setSintomas(e.target.value)} />
        </div>
        {editar ? <input
          type="submit"
          className="bg-green-700 w-full p-3 text-white uppercase font-bold hover:bg-green-800 cursor-pointer transition-colors rounded"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          onClick={update}
        /> :<input
        type="submit"
        className="bg-green-700 w-full p-3 text-white uppercase font-bold hover:bg-green-800 cursor-pointer transition-colors rounded"
        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        onClick={add}
      /> }
        
      </form>
    </div>




  )
}


export default Formulario;