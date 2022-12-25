import React from 'react'
import okan from '../../assets/okan.jpg'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={okan} download className='btn'>
        Download Resume
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
