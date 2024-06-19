import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { Home } from './pages/home';

export const AppContext = React.createContext({status: 'DEAD'});

function App() {
  const [status, setStatus] = useState<string>('DEAD')
  useEffect(() => {
    // This will be replaced by the fetch call to the API
    /*fetch("/api/status")
        .then(response => response.json())
        .then(data => setStatus(data.status))*/
    document.title = `Jogurt is ${status}!`
  },[])
  return (
    <AppContext.Provider value={{status: status}}>
      <Home />
    </AppContext.Provider>
  )
}

export default App
