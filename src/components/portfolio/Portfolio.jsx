import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//! Add projects and map through below data...
// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'placeholder',
//     github: 'https://....',
//     demo: 'https://.....',
//   },
//   {},
//   {},
// ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project-name' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>
              Github
            </a>
            <a href='#' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project-name' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>
              Github
            </a>
            <a href='#' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project-name' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>
              Github
            </a>
            <a href='#' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project-name' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>
              Github
            </a>
            <a href='#' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project-name' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>
              Github
            </a>
            <a href='#' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='project-name' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='#' className='btn' target='_blank'>
              Github
            </a>
            <a href='#' className='btn btn-primary' target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
