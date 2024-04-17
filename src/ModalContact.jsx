import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function ModalContact() {

  const [sent, setSent] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      }
      )
      .then((res) => {
        setSent(true)
      }, (error) => {
        alert("Sorry, an error occurred while sending. Please refresh and try again.")
        setSent(false)
      }
      )
  }

  return (
    <div className='fondamento'>
      {!sent ? (
        <form id='contact-form' ref={form} onSubmit={sendEmail}>
          Your Name:
          <input type="text" name='from_name' />
          Your Email address:
          <input type="text" name='from_email' />
          Message:
          <textarea
            placeholder='Good day Sean, we want to hire you and make you a very generous offer...'
            name='message'
            rows={5}
            cols={40}
          />

          <input type="submit" value="Send" />
        </form>
      ) : (
          <h2>Message sent, thank you for reaching out!</h2>
      )}
    </div>)
}

export default ModalContact