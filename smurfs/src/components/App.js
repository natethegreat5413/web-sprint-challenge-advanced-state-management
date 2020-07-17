import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
// Components
import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'
// Contexts
import { SmurfContext } from '../contexts/SmurfContext'
import { FormContext } from '../contexts/FormContext'





const App = () => {
  const [smurfs, setSmurfs] = useState([])

  const addSmurf = item => {
    setSmurfs([...smurfs, item])
  }

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res.data)
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='App'>
      <SmurfContext.Provider value={smurfs}>
        <FormContext.Provider value={addSmurf}>
          <h1>Smurf Villiage!!</h1>
          <SmurfForm />
          <SmurfList />
        </FormContext.Provider>
      </SmurfContext.Provider>
    </div>
  )
}

export default App;
