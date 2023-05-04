import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from '../Buttons'

const UpcomingForm = () => {
  return (
    <div className='lg:col-span-4'>
        <div className='px-10 py-6 border-b-2'>
            <p className='text-base font-semibold underline'>13-85 Beastly Ln, Newcastle</p>
        </div>
        <div className='m-10'>
        <h1 className='text-2xl font-semibold'>Upcoming Inspections & Events</h1>
        <div className='mt-8'>
        <button className='flex gap-x-3 items-center font-medium text-sm py-2 px-3 bg-[#F0F2F6] rounded-lg'>
            <FontAwesomeIcon icon={faCalendarPlus} />
            <p>Open - Wed 14th Dec, 5:30pm</p>
        </button>
        <button className='flex gap-x-3 items-center font-medium text-sm py-2 px-3 bg-[#F0F2F6] rounded-lg mt-4'>
            <FontAwesomeIcon icon={faCalendarPlus} />
            <p>Auction - Sat 22nd Oct</p>
        </button>
        </div>
        </div>
        <div className='border-t-2 p-10 mt-20 hidden lg:block'>
           <button className='bg-sp-blue text-white px-6 py-4 rounded-lg font-medium text-base w-full'>
           Make an enquiry
           </button>
           <button className='bg-sp-blue text-white px-6 py-4 rounded-lg font-medium text-base w-full block mt-4'>
           Register to bid
           </button>
        </div>
    </div>
  )
}

export default UpcomingForm