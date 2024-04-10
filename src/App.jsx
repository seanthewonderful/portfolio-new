import { useState } from 'react'
import shamrock from './assets/shamrock.png'
import reactLogo from './assets/react.svg'
import SFlogo from './assets/SF_logo.png'
import jsLogo from './assets/jsLogo.png'
import expressLogo from './assets/Expressjs.svg'
import pythonLogo from './assets/pylogo.png'
import flaskLogo from './assets/flask.svg'
import psqlLogo from './assets/psql.png'
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
          Full-stack graduate, engineering first in Python. 
        </p>
        <p>
          Instructor of Python Engineering at Hackbright Academy.
        </p>
        <p>
          Instructor of Web Development at Devmountain.
        </p>
          <span>
            <img className='logo-sm' src={pythonLogo} alt="" />
            <img className='logo-sm' src={flaskLogo} alt="" />
            <img className='logo-sm' src={psqlLogo} alt="" />
          </span>
          <span>
            <img className='logo-sm' src={jsLogo} alt="" />
            <img className='logo-sm' src={reactLogo} alt="" />
            <img className='logo-sm' src={expressLogo} alt="" />
          </span>
      </div>
    </>
  )
}

export default App
