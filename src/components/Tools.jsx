import React from 'react'

function Tools({title, tools}) {
  return (
    <div className='tools'>
        <h5 className='tools__title'>{title}</h5>
        <ul>
            {tools.map((tool, i) => {
                return (
                  <>
                    <li key={i} className='tools__li'>{tool}</li>
                  </>
                )
            })}
        </ul>
    </div>
  )
}

export default Tools