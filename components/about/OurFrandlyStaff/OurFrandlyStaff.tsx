import { RequestAgentCard } from '@/components/Cards'
import React from 'react'
import DonnasTeam from './DonnasTeam'
import RentalTeam from './RentalTeam'
import AdminTeam from './AdminTeam'

export const OurFrandlyStaff = () => {
  return (
    <section className='bg-white container mx-auto rounded-3xl'>
        <div className='px-14 py-7 border-b-2 border-sp-solid-gray-600'>
            <h1 className='font-semibold text-2xl'>Our friendly staff</h1>
        </div>
        <div className='mx-14 mt-10'>
            <RequestAgentCard types='vertical' />
        </div>
        <DonnasTeam />
        <RentalTeam />
        <AdminTeam />
    </section>
  )
}
