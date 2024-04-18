import shamrock from './assets/shamrock.png'
import knotts from './assets/knotts.png'
import disneyland from './assets/disneyland.png'
import chatRoulette from './assets/chatroulette.png'
import avgJoe from './assets/avgJoe.png'

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
          <li>Hosted with AWS</li>
        </ul>

        <div className='desc-div lancelot'>
          <a href="http://35.91.150.237:9009/" target='_blank' >
            <img className='project-img' src={knotts} />
            <br/>Website
          </a>
          <p>
            The latest theme park restaurant rating application. I built this in order to utilize every technology (and more, of course) that I instruct in our Full Stack Web Development course at Devmountain. This project now serves as an example for real-life use cases of all our instructed technologies, and was another fun project to build. <br/>Users are able to customize their profiles, research restaurants in the theme park based on location, name, etc, and leave their own reviews which will dynamically update the restaurant status and saves this information to a PSQL database.
          </p>
        </div>

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
          <li>Hosted with AWS</li>
        </ul>
        
        <div className='desc-div lancelot'>
          <a href="http://eatingdisneyland.com" target='_blank'>
            <img className='project-img' src={disneyland} />
            <br/>Website
          </a>
          <p>
            So I like to critique restaurants at theme parks...at least it has been inspiration for two coding projects. <br/>This project was my capstone project for my own Bootcamp experience learning full stack Python Engineering. This is a simplified version of <em>Eating Knott's</em>, and of course was coded in Python using Flask. It also utilizes a PSQL database, and naturally served as a general basis for how the Knott's application was to function. <br/>The next plan for these applications is to create a parent-application that will allow users to check out/rate any restaurant from <em>any</em> theme park in the U.S. and allow for them to enter the restaurants' locations themselves because I realistically don't have time to populate that much information in a database!
          </p>
        </div>

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

        <div className='desc-div lancelot'>

        <a href="https://github.com/seanthewonderful/cheaters-chance" target='_blank'>
          <img className='project-img' src='https://www.wikihow.com/images/thumb/2/2f/Play-Liar%27s-Dice-Step-1-Version-5.jpg/v4-460px-Play-Liar%27s-Dice-Step-1-Version-5.jpg.webp' />
          <br/>Github Repo
        </a>
        <p>
          This is my latest collaborative project and one that I'm still very excited about. We are building the game "Liar's Dice", as played in <em>Pirates of the Carribbean: Dead Man's Chest</em>. <br/>This one is a healthy challenge because the game logic is fairly complex, we are utilizing web sockets to enable users to become "players" within a particular socketed room and keep all their clean in that context, we are storing information about the games in a database, and we are animating the gameplay features. <br/>I expect to be working on this one for a while longer since our collaborative efforts have limited weekly time, but it is one that is very exciting and I can't wait to update the progress here as we get more of it operational. 
        </p>
        </div>

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

        <div className='desc-div lancelot'>
          <a href="https://github.com/seanthewonderful/ChatRoulette" target='_blank'>
            <img className='project-img' src={chatRoulette} />
            <br/>Github Repo
          </a>
          <p>
            Here is my first project utilizing web sockets for users to be able to send and receive messages instantly. Using Socket.io integrated with this Vite+React application, users can login and either join or create their own chat room that will endure as long as a user is still inside it. <br/>Although there's a lot of other fun things I would like to achieve with this one, it served its purpose to teach me how sockets work and is a simple, yet efficient application that will remind users of the glorious days of AOL chat rooms! 
          </p>
        </div>

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

        <div className='desc-div lancelot'>
          <a href="https://github.com/kylebaugh/average-joes-jury" target='_blank'>
            <img className='project-img' src={avgJoe} />
            <br/>Github Repo
          </a>
          <p>
            Average Joe's Jury was the best name we came up with for this application that allows users to rate and review just about anything. <br/> The idea is something I've wanted to play with for a while, alas is quite grandiose in scale and therefore the progress was cut short when we had to get back to devoting our time to our jobs. Our database plan became quite extensive and we were proud of what we came up with in a fairly short amount of time. <br/>I was proud to establish proper database relationships and front end logic to allow users to upvote or downvote a review, like you see in Google Maps or Yelp reviews. Eventually I got this working properly so that any user could either upvote, downvote, or remove their vote, and not be able to duplicate them as was the largest bug.
          </p>
        </div>
      </section>
      
    </div>
  )
}

export default ModalProjects