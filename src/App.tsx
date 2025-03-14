import { useState } from 'react'
import './App.css'
// import Scanner from './components/Scanner'
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';

function App() {
  const [scanning, setScanning] = useState(false)
  const [text, setText] = useState('')

  const handleScan = (result: IDetectedBarcode[]) => {
    result.forEach(r => {
      setText((prev) => prev + r.rawValue)
    })
    setScanning(false)
  }

  return (
    <>
      <button onClick={() => navigator.clipboard.writeText(text)} > Done </button>
      <button onClick={() => setScanning(true)} > Scan </button>
      { scanning &&
        <Scanner onScan={handleScan} />
      }
    </>
  )
}

export default App
