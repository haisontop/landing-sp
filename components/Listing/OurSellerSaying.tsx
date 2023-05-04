import React from 'react'
import SellerFeedbackCard from '../Cards/SellerFeedbackCard'

const OurSellerSaying = () => {
  const list = ["1","2","3"]
  return (
    <section className='mt-4 lg:mt-[40px] relative'>
        <div className='bg-[#042134] w-full h-[545px] absolute top-40' />
        <div className='container px-4 mx-auto relative z-20'>
            <div className='mt-10 grid grid-cols-3 gap-x-4'>
                {
                    list.map((lst : any) => <SellerFeedbackCard key={lst} />)
                }
            </div>
        </div>
    </section>
  )
}

export default OurSellerSaying