import projects from './data/projects'
import ProjectCard from './components/ProjectCard'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import jenna from './assets/jenna.png'
import Tools from './components/Tools'

/**
 * TODOS
 * - make site responsive
 * - add projects
 * - clean up code
 */

const languages = ['JavaScript', 'TypeScript', 'HTML', 'CSS/Sass', 'Java', 'C', 'Python']
const tools = ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'p5.js', 'Three.js', 'Git']
const design = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Adobe After Effects', 'Sketch']

function App() {

  return (
    <div>
      <SideNav />
      <div className='main'>
        <section id='projects' className='section section--top'>
          <h1 className='section__title'>Projects</h1>
          <div className='project-cards'>
            {projects.map((project, i) => {
              return (
                <ProjectCard 
                  key={i}
                  num={i}
                  image=''
                  title={project.title}
                  description={project.description}
                  chips={project.chips}
                  ghLink={project.ghLink}
                  projLink={project.projLink}
                />
              )
            })}
          </div>
        </section>
        <section id='tools' className='section'>
          <h1 className='section__title'>Tools</h1>
          <div className='section--tools'>
            <Tools
              title="Languages"
              tools={languages}
            />
            <Tools
              title="Tools/Frameworks"
              tools={tools}
            />
            <Tools
              title="Design Tools"
              tools={design}
            />
          </div>
        </section>
        <section id='about' className='section'>
          <h1 className='section__title'>About</h1>
          <div className='section--about'>
            <div>
              <p className='section--about__title'>Hi, my name is Jenna!</p>
              <p>I’m a developer based in New York City and I love creating things with design and code! I’m currently pursuing a bachelor’s degree in Interactive Media Arts and Computer Science at New York University. I aim to create intuitive designs that put the users’ needs first and bring them to life with code. When I’m not at my desk, I love to cook new recipes, paint to relax, and explore the city.</p>
            </div>
            <img className='section--about__image' src={jenna}/>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
