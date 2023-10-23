import React from 'react'
import './InitialModal.css'

const InitialModal = () => {
  return (
    <div className='w-full h-full bg-white fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
      <div className='w-[90%] h-auto md:h-[60%] lg:h-[90%] lg:w-auto bg-[#E9C48E] p-20 rounded-[50%] border-[#6F4E37] border-[10px] border-solid flex flex-col items-center'>
            <img className='w-40 md:w-[20rem] slide-in-blurred-top' src="https://firebasestorage.googleapis.com/v0/b/sweet-bites-922e3.appspot.com/o/jarro.png?alt=media&token=0eb48bd2-88c3-46af-b855-1efb20502b20&_gl=1*1s8hgof*_ga*MTQ1MTU3NDE3OC4xNjk2MzUyOTY0*_ga_CW55HF8NVT*MTY5ODA4MjU5OS4xNS4xLjE2OTgwODI4MjQuMjcuMC4w" alt="" />
            <h1 className='text-[2rem] md:text-[6rem] lg:text-[4.25rem] lg:leading-10'>
                <span className='focus-in-expand-fwd'>S</span>
                <span className='focus-in-expand-fwd'>w</span>
                <span className='focus-in-expand-fwd'>e</span>
                <span className='focus-in-expand-fwd'>e</span>
                <span className='focus-in-expand-fwd'>t</span>
                <span className='focus-in-expand-fwd'>{' '}</span>
                <span className='focus-in-expand-fwd'>B</span>
                <span className='focus-in-expand-fwd'>i</span>
                <span className='focus-in-expand-fwd'>t</span>
                <span className='focus-in-expand-fwd'>e</span>
                <span className='focus-in-expand-fwd'>s</span>
            </h1>
      </div>
    </div>
  )
}

export default InitialModal
