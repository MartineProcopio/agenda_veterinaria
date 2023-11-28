
import { useState, useEffect } from 'react'
import Header from './components/header'
import Formulario from './components/formulario'
import ListadoPacientes from './components/listadoPacientes'
import Footer from './components/footer'
import Axios from 'axios' 

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [editar, setEditar] = useState(false);
  
  const [captar, setCaptar] = useState(false);


  const carga = () => {
    
    Axios.get(`http://localhost:3001/pacientes`, {}).then((response) =>{
        
        setPacientes(response.data)
        })}

       

  
  /*Axios.get(`http://localhost:3001/pacientes`, {}).then((response) =>{
        
        setPacientes(response.data)
        
    })*/
    

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)}
    obtenerLS();
  }, []);


    useEffect(() => {  
      carga()
        
        localStorage.setItem('pacientes', JSON.stringify( pacientes ));
      
      
  
    }, [pacientes]);


 
const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div  >
      <h1 class="logo"><Header /></h1>

      <div className="mt-20 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          editar={editar}
          setEditar={setEditar}
        
          />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          editar={editar}
          setEditar={setEditar}
      
          />
        
      </div>
      <Footer/>
    </div>)
}

export default App;
