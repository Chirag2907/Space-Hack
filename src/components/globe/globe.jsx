import React from 'react'
import gif from './SnapSave.io-Viewing the Earth’s Rotation from Space.gif'
import './globe.scss'

const Globe = () => {
  return (
    <div>
      <div className='globe'>
        <img src={gif} alt='globe' className='globe' height={450}  />
      </div>
    </div>
  )
}

export default Globe