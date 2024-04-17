import shamrock from './assets/shamrock.png'
import knotts from './assets/knotts.png'
import disneyland from './assets/disneyland.png'

function ModalProjects() {
  return (
    <div id='projects' className='fondamento'>
      <section className='project-section'>
        <h2>Eating Knott's Berry Farm</h2>
        <b style={{textDecoration: 'underline'}}>Technologies:</b>
        <ul className='project-ul'>
          <li>React</li>
          <li>ViteExpress</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>Redux</li>
          <li>Leaflet JS</li>
        </ul>
        <p>Description for project 1</p>
        
        <a href="http://35.91.150.237:9009/" target='_blank' >
          <img className='project-img' src={knotts} />
          <br/>Website
        </a>
      </section>
      <section className='project-section'>
        <h2>Eating Disneyland</h2>
        <b style={{textDecoration: 'underline'}}>Technologies:</b>
        <ul className='project-ul'>
          <li>Python</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
          <li>SQLAlchemy</li>
          <li>Folium</li>
        </ul>
        
        <a href="http://eatingdisneyland.com" target='_blank'>
          <img className='project-img' src={disneyland} />
          <br/>Website
        </a>
      </section>
      <section className='project-section'>
        <h2>Chat Roulette</h2>
        <b style={{textDecoration: 'underline'}}>Technologies:</b>
        <ul className='project-ul'>
          <li>React</li>
          <li>ViteExpress</li>
          <li>PostgreSQL</li>
          <li>Socket.io</li>
          <li>Sequelize</li>
          <li>Redux</li>
        </ul>
        <a href="https://github.com/seanthewonderful/ChatRoulette" target='_blank'>
          <img className='project-img' src={shamrock} />
          <br/>Github Repo
        </a>
      </section>
      <section className='project-section'>
        <h2>Average Joe's Jury</h2>
        <b style={{textDecoration: 'underline'}}>Technologies:</b>
        <ul className='project-ul'>
          <li>React</li>
          <li>ViteExpress</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>Redux</li>
        </ul>
        <a href="https://github.com/kylebaugh/average-joes-jury" target='_blank'>
          <img className='project-img' src={shamrock} />
          <br/>Github Repo
        </a>
      </section>
      <section className='project-section'>
        <h2>Cheater's Chance</h2>
        <b style={{textDecoration: 'underline'}}>Technologies:</b>
        <ul className='project-ul'>
          <li>React</li>
          <li>ViteExpress</li>
          <li>PostgreSQL</li>
          <li>Socket.io</li>
          <li>Sequelize</li>
          <li>Redux</li>
        </ul>
        <a href="https://github.com/seanthewonderful/cheaters-chance" target='_blank'>
          <img className='project-img' src='https://www.wikihow.com/images/thumb/2/2f/Play-Liar%27s-Dice-Step-1-Version-5.jpg/v4-460px-Play-Liar%27s-Dice-Step-1-Version-5.jpg.webp' />
          <br/>Github Repo
        </a>
      </section>
    </div>
  )
}

export default ModalProjects