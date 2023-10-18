import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Formulario from './components/formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Formulario/>
    </>
  )
}

export default App
