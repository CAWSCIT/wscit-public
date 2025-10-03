import { useEffect, useState } from 'react'
import caLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://ca.org'
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div>
        <a href="https://ca.org" target="_blank">
          <img src={caLogo} className="logo react" alt="CA logo" />
        </a>
      </div>
      <h1>it.ca.org </h1>
      <div className="card">
        <p>
          WSCIT Committee website is under construction... (This page will
          redirect to ca.org in 5 seconds)
        </p>
      </div>
    </>
  )
}

export default App
