import { useState } from 'react'
import './App.css'
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("<enter-yours>");

function App() {
  const [isCallActive, setIsCallActive] = useState(false)

  const startCall = async () => {
    await vapi.start("<enter-yours>")
    setIsCallActive(true)
  }

  const stopCall = async () => {
    vapi.stop()
    setIsCallActive(false)
  }

  return (
    <div className="container">
      <h1>Vapi Call Demo</h1>
      <div className="button-container">
        <button 
          onClick={startCall} 
          disabled={isCallActive}
          className="call-button"
        >
          Start Call
        </button>
        <button 
          onClick={stopCall} 
          disabled={!isCallActive}
          className="call-button"
        >
          Stop Call
        </button>
      </div>
      <p>{isCallActive ? 'Call in progress...' : 'Call ended'}</p>
    </div>
  )
}

export default App
