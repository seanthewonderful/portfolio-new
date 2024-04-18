import ModalContact from './ModalContact'
import ModalAbout from './ModalAbout'
import ModalProjects from './ModalProjects'


function ModalCommand({ showModal, projects, about, contact, closeModal }) {

  if (!showModal) return null

  return (
    <div className='modal'>

      <div id={projects ? 'projects-modal-content' : 'modal-content'}>

      <button onClick={closeModal}>Close</button>

      {projects && <ModalProjects />}
      {about && <ModalAbout />}
      {contact && <ModalContact />}
      </div>

    </div>
  )
}

export default ModalCommand