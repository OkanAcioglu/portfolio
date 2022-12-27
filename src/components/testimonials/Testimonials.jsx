import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/portfolio1.jpg'
import AVTR2 from '../../assets/portfolio2.jpg'
import AVTR3 from '../../assets/portfolio3.jpg'
import AVTR4 from '../../assets/portfolio4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Lorem ipsum 1',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis excepturi facere odio dolor commodi praesentium voluptatum voluptatem non labore quia velit temporibus dolorem, modi adipisci taque ipsa accusamus nulla',
  },
  {
    avatar: AVTR2,
    name: 'Lorem ipsum 2',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis excepturi facere odio dolor commodi praesentium voluptatum voluptatem non labore quia velit temporibus dolorem, modi adipisci taque ipsa accusamus nulla',
  },
  {
    avatar: AVTR3,
    name: 'Lorem ipsum 3',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis excepturi facere odio dolor commodi praesentium voluptatum voluptatem non labore quia velit temporibus dolorem, modi adipisci taque ipsa accusamus nulla',
  },
  {
    avatar: AVTR4,
    name: 'Lorem ipsum 4',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex facilis excepturi facere odio dolor commodi praesentium voluptatum voluptatem non labore quia velit temporibus dolorem, modi adipisci taque ipsa accusamus nulla',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
