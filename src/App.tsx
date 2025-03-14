import { useState } from 'react'
import './App.css'
// import Scanner from './components/Scanner'
import { Scanner } from '@yudiel/react-qr-scanner';

function App() {
  const [scanning, setScanning] = useState(false)
  const [text, setText] = useState('')

  return (
    <>
      <button onClick={() => setScanning(true)} />
      { scanning &&
        <Scanner onScan={(result) => setText(old => old + result)} />
      }
    </>
  )
}

export default App
