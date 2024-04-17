import myImg from './assets/me.jpg'
import fagan from './assets/fagan.png'
import fagan2 from './assets/fagan2.png'

function ModalAbout() {

  return (
    <div className='fondamento' id='about'>
      <span>
        <img 
          id='profile-img' 
          src={myImg} 
          alt="this would be a picture of me, if my code worked. Lucky for you, it doesn't right now" 
          />
      </span>
      <section 
        className='lancelot'
        id='about-text' style={{ textAlign: 'start' }}>
        <p>
          I'm a full-stack developer looking to hone my skills, with significant intrigue in the world of Machine Learning and AI development. 
        </p>
        <p>
          I've enjoyed (almost) all sides of programming that I have learned. Like many in my field, my interest in puzzles and logic propels my continual fascination with software development and engineering. 
        </p>
        <p>
          Unlike many in my field, I have a background in social sciences and the arts. I believe this gives me a keen understanding of the user experience and even humanizing logical flows both for users and in behind-the-scenes engineering. I want to continue making software for humans and maintain an affinity for creativity in all areas of life, even in the logical process of writing code. 
        </p>
        <p>
          Though I could spend all day at a desk writing code, I tend to spend my off-hours with my family, and almost always outside either hiking or hitting golf balls at the driving range. 
        </p>
      </section>
        <span>
          <img 
            id='about-logo' 
            src={fagan2} 
            alt="no such luck" 
            />
        </span>
    </div>
  )
}

export default ModalAbout