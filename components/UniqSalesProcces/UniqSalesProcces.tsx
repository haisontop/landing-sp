import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export const UniqSalesProcces = () => {
  return (
    <section>
      <div className='container mx-auto px-4'>
          <div className='text-center mt-20'>
            <h1 className='font-bold text-4xl text-sp-solid-blue-800'>Our Unique Sales Process</h1>
            <p className='text-base lg:w-2/6 mx-auto mt-5 text-sp-solid-gray-800'>A short explainer why our sales process follows this unique model and how we make it work for the best.</p>
          </div>
          <div className='mt-20 lg:w-10/12 mx-auto grid gap-x-2 lg:gap-x-0 lg:gap-y-4 grid-flow-col lg:grid-flow-row lg:grid-cols-1 auto-cols-[370px] lg:auto-cols-auto overflow-x-auto'>
            <StepOne />
            <StepTwo />
            <StepThree />
          </div>
      </div>
    </section>
  )
}
