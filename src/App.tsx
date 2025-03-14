import { useState } from 'react'
import './App.css'
// import Scanner from './components/Scanner'
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';

function App() {
  const [scanning, setScanning] = useState(false)
  const [text, setText] = useState('')

  const handleScan = (result: IDetectedBarcode[]) => {
    result.forEach(r => {
      setText((prev) => prev + r.rawValue.slice(7))
    })
    setScanning(false)
  }

  return (
    <>
      {text.length > 0 &&
        <button className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
          onClick={() => navigator.clipboard.writeText(text)} > Copy to Clipboard </button>
      }
      <button className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        onClick={() => setScanning(true)} > {text.length > 0 ? 'Scan More' : 'Scan'} </button>
      {scanning &&
        <Scanner onScan={handleScan} />
      }
      {text.length > 0 &&
        <p>{text}</p>
      }
    </>
  )
}

export default App
