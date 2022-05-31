import React from 'react';
import './App.css';
import { useState } from 'react';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


function App() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    let newBoolean = !display
    setDisplay({
      display: newBoolean
    })
  }

  return (
    <>
        <Header/>
        { display ? <ToyForm/> : null }
        <div className="buttonContainer">
          <button onClick={handleClick}> Add a Toy </button>
        </div>
        <ToyContainer/>
      </>
  )
}

export default App
