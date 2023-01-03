import React from 'react'

const GridItem = ({title, img}) => {
    //console.log(img)
  return (
    <div className='card'>
        <img src={img} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GridItem