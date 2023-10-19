import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Formulario from './components/formulario'
import ListadoPacientes from './components/listadoPacientes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className="mt-20 md:flex"> 
       <Formulario />
        <ListadoPacientes />
      </div>
    
    </>
  )
}

export default App
