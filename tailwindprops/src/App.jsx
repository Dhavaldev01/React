import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name : "dhaval",
    age : 20
  }

   let newArr = []
  return (
    <>
    
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card name="divya" btntext = "more"/>
    <Card name = "dipali" btntext = "click me"/>

    </>
  )
}

export default App
