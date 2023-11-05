
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Formulario from './components/formulario'
import ListadoPacientes from './components/listadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([]); //cargando props para importarlos en formulario

  return (
    <div className=''>
      <Header className=""/>
      <div className="m-0 mt-32 md:flex"> 
       <Formulario 
                pacientes={pacientes}
                setPacientes={setPacientes}/>
        <ListadoPacientes 
                 pacientes={pacientes}
                 setPacientes={setPacientes}/>
      </div>
    
    </div>
  )
}

export default App
