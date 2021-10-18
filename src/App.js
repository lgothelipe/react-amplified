import React, { useState } from 'react'
import Amplify, { API } from 'aws-amplify'
import logo from './logo.svg';
import './App.css';
import config from './config'

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  const [state, setState] = useState()

  const myInit = { 
    response: true,
  }

  const getApi = async () => {
    try {
      const result = await API.get(config.api, config.path, myInit)
      // console.log(result)
      if (result.status === 200) setState(result.data.success)
    } catch (err) { console.log(err.response) }
  }

  const resetApi = () => setState()

  return (
    <div className="App">
      <header className="App-header">
        <img height={100} src={logo} className="App-logo" alt="logo" />
        <p>
          <button style={styles.button} onClick={resetApi}>Reset response</button>
          <span style={{ padding: 20 }}></span>
          <button style={styles.button} onClick={getApi}>Test API</button>
        </p>
        <p>
          API response: {state}
        </p>
        <p>
          Frontend env: {config.enviroment}
        </p>
      </header>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: 'blue',
    border: 'none',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
  }
}

export default App;
