import React from 'react'

function DashboardCards(props) {

  const {src, alt, cardLabel} = props;

  return (
    <div className='dashboard-card fancy'>
        <img 
          className='card-img' 
          src={src} 
          alt={alt ? alt : 'Image Alt'} 
          width="200" height="200"
          />
        <h3 className='card-label'>{cardLabel}</h3>
    </div>
  )
}

export default DashboardCards