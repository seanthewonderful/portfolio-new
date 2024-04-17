import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

import shamrock from './assets/shamrock.png'
import reactLogo from './assets/react.svg'
import SFlogo from './assets/SF_logo.png'
import jsLogo from './assets/jsLogo.png'
import expressLogo from './assets/Expressjs.svg'
import pythonLogo from './assets/pylogo.png'
import flaskLogo from './assets/flask.svg'
import psqlLogo from './assets/psql.png'

import './App.css'

import ModalCommand from './ModalCommand'


function App() {

  const [showModal, setShowModal] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const closeModal = () => {
    setShowModal(false)
    setShowProjects(false)
    setShowAbout(false)
    setShowContact(false)
  }

  const projectsClick = () => {
    setShowModal(true)
    setShowProjects(true)
    setShowAbout(false)
    setShowContact(false)
  }
  const aboutClick = () => {
    setShowModal(true)
    setShowProjects(false)
    setShowAbout(true)
    setShowContact(false)
  }
  const contactClick = () => {
    setShowModal(true)
    setShowProjects(false)
    setShowAbout(false)
    setShowContact(true)
  }

  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <div id='header-div'>
        <img src={shamrock} className='logo shamrock shamrock-1' alt='no such luck' />
        <img src={SFlogo} className='logo react' alt='no such luck' />
        <img src={shamrock} className='logo shamrock shamrock-2' alt='no such luck' />
        <nav id='nav'>
          <button onClick={projectsClick} >
            Projects
          </button>
          <button onClick={aboutClick} >
            About
          </button>
          <button onClick={contactClick} >
            Contact Me
          </button>
        </nav>
      </div>

      <h1 className='fondamento'>Sean Fagan</h1>
      <div className="card fondamento">
        <p>
          Full-stack graduate of Python Engineering. 
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

      <ModalCommand 
        showModal={showModal} 
        projects={showProjects}
        about={showAbout}
        contact={showContact}
        closeModal={closeModal}
        />
    </>
  )
}

export default App
