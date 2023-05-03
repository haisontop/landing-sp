import React from 'react'
import UpcomingForm from './UpcomingForm'
import MapBox from './MapBox'

export const Map = () => {
  return (
    <div className='mt-20 grid lg:grid-cols-12 gap-x-4 border-2 rounded-2xl shadow-2xl bg-white'>
        <UpcomingForm />
        <MapBox />
    </div>
  )
}