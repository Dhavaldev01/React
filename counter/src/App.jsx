import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setcounter] = useState(15)

  const addValue = () =>{
    console.log("clicked" , counter);
    //counter = counter + 1
    if( counter < 20){
      setcounter(counter + 1)
    }
    

}
const removeValue =() =>{
  if(counter > 0){
    setcounter(counter -1)
  }
}
// let counter = 5 ;
  return (
  <>
     
  <p>dhaval</p>
  <h2>counter value: {counter}</h2>
  <br />
  <button onClick={addValue}>add value{counter}</button>
  <br />
  <br />
  <button onClick={removeValue}>remove value{counter}</button>
  <p>footer  {counter} </p>
  </>
  )
}

export default App
