import { useState } from 'react'
import shamrock from './assets/shamrock.png'
import SFlogo from './assets/SF_logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <img src={shamrock} className='logo shamrock shamrock-1' alt='not yet' />
        <img src={SFlogo} className='logo react' alt='not yet' />
        <img src={shamrock} className='logo shamrock shamrock-2' alt='not yet' />
      </div>
      <h1 className='fondamento'>Sean Fagan</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
