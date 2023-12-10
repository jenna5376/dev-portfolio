import projects from './data/projects'
import ProjectCard from './components/ProjectCard'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import Tools from './components/Tools'

function App() {
  const languages = ['JavaScript', 'TypeScript', 'HTML', 'CSS/Sass', 'Java', 'C', 'Python']
  const tools = ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'p5.js', 'Three.js', 'Git']
  const design = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Adobe After Effects', 'Sketch']

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
                  image={project.image}
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
        <Footer />
      </div>
    </div>
  )
}

export default App