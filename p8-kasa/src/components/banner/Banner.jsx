import React from 'react'

const Banner = ({image,title,alt}) => {
  return (
    <div className="banner" style={{backgroundImage:`url(${image})`}}>
        <div className='bannerOver'>
            <h1>{title}</h1></div>
</div>
  )
}

export default Banner