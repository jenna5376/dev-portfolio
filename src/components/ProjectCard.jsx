import React from 'react'
import { ArrowOutward } from '@mui/icons-material';

function ProjectCard({num, image, title, description, chips, ghLink, projLink}) {
  return (
    <a key={num+1} href={projLink} className='project-card'>
      <img className='project-card__img' src={image}/>
      <div className='project-card__info'>
        <div>
          <p className='project-card__num'>{`0${num+1}`}</p>
          <div>
            <h2 className='project-card__title'>{title}</h2>
            <ArrowOutward className='project-card__arrow' fontSize='small'/>
          </div>
          <p className='project-card__desc'>{description}</p>
        </div>
        <div className='project-card__chips'>
          {chips.map((chip, i) => {
            return (
              <div key={i} className='project-card__chip'>
                <p className='project-card__chip-label'>{chip}</p>
              </div>
            )
          })}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard