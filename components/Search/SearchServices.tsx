import React from 'react'
import { SingupProperty } from '../SingupProperty'

export const SearchServices = () => {
  return (
    <section className='container mx-auto px-4 mt-5'>
        <div className='grid grid-cols-12 gap-x-4'>
            <div className='col-span-8 grid gird-cols-2'>
               <div>

               </div>
               <div className='relative overflow-hidden'>

               </div>
            </div>
            <div className='col-span-4'>
                <SingupProperty />
            </div>
        </div>
    </section>
  )
}