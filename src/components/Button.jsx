import React from 'react'

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {name}
      {isBeam && (
        <span className='relative flex h-3 w-3'>
          <span className='btn-ping' />
          <span className='btn-ping' />
        </span>
      )}
    </button>
  )
}

export default Button
