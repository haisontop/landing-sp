import { AgentCard } from '@/components/Cards'
import React from 'react'

const RentalTeam = () => {
    const items = [
        {
          name : "Donna Spillane",
          profession : "Principal and Licensed Real Estate Agent",
          img : "/image/listing/200813_Spillane.Property-10.png"
        },
        {
          name : "Patrick Skinner ",
          profession : "Sales Associate",
          img : "/image/listing/210714_Spillane.Property-6.png"
        }
      ]
  return (
    <div className='mt-20 px-4 lg:px-14 border-t'>
    <h1 className='text-base font-medium mt-10'>Rental Team</h1>
    <div className='mt-4 grid lg:grid-cols-3 gap-4'>
        {
            items.map((it: any, index) => <AgentCard key={index} name={it.name} img={it.img} profession={it.profession} />)
        }
    </div>
</div>
  )
}

export default RentalTeam