import React from 'react'
import './InitialModal.css'

const InitialModal = () => {
  return (
    <div className='w-full h-full bg-white fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
      <div className='w-[90vw] h-[90vw] md:h-[60%] lg:h-[90vh] lg:w-[90vh] bg-[#E9C48E] p-20 rounded-[50%] border-[#6F4E37] border-[10px] border-solid flex flex-col items-center relative'>
            <img className='image-scale absolute top-16 md:top-20 w-40 md:w-[20rem]' src="https://firebasestorage.googleapis.com/v0/b/sweet-bites-922e3.appspot.com/o/jarro.png?alt=media&token=0eb48bd2-88c3-46af-b855-1efb20502b20&_gl=1*1s8hgof*_ga*MTQ1MTU3NDE3OC4xNjk2MzUyOTY0*_ga_CW55HF8NVT*MTY5ODA4MjU5OS4xNS4xLjE2OTgwODI4MjQuMjcuMC4w" alt="" />
            <h1 className='bottom-8 md:bottom-16 text-[2rem] md:text-[6rem] lg:text-[4.25rem] lg:leading-10 absolute'>
                <span className='show-letter'>S</span>
                <span className='show-letter delay-1s'>w</span>
                <span className='show-letter delay-2s'>e</span>
                <span className='show-letter delay-3s'>e</span>
                <span className='show-letter delay-4s'>t</span>
                <span className='show-letter'>{' '}</span>
                <span className='show-letter delay-5s'>B</span>
                <span className='show-letter delay-6s'>i</span>
                <span className='show-letter delay-7s'>t</span>
                <span className='show-letter delay-8s'>e</span>
                <span className='show-letter delay-9s'>s</span>
            </h1>
      </div>
    </div>
  )
}

export default InitialModal
