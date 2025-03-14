import { useState } from 'react'
import './App.css'
// import Scanner from './components/Scanner'
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';

function App() {
  const [scanning, setScanning] = useState(false)
  const [text, setText] = useState('')
  // const [preview, setPreview] = useState(false)
  const [showCopied, setShowCopied] = useState(false)

  const handleScan = (result: IDetectedBarcode[]) => {
    result.forEach(r => {
      setText((prev) => prev + r.rawValue.slice(7))
    })
    setScanning(false)
  }

  const copy = () => {
    navigator.clipboard.writeText(text)
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 500)
  }

  return (
    <>
      {text.length > 0 &&
        <>
          <button className='mx-2 my-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
            onClick={copy} > {showCopied ? 'Copied' : 'Copy'}</button>
          <button className='mx-2 my-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
            onClick={() => setText('')} > Clear </button>
        </>
      }
      <button className='mx-2 my-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        onClick={() => setScanning(true)} > {text.length > 0 ? 'Scan More' : 'Scan'} </button>
      {scanning &&
        <Scanner onScan={handleScan} components={{audio: false}}/>
      }
      {text.length > 0 &&
        <>
          <p>{text.length} characters</p>
          {/* <button className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        onClick={() => setScanning(true)} > {text.length > 0 ? 'Preview'} </button> */}
        </>
      }
    </>
  )
}

export default App
