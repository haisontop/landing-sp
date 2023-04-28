import Image from 'next/image'
import React from 'react'
import { Button } from '../Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const MapBox = () => {
  return (
    <div className='col-span-8 relative overflow-hidden rounded-r-2xl'>
        <Image alt='map' fill src={"/image/listing/Rectangle 53.png"} className='object-cover' />
        <button className='text-sm p-3 rounded-md bg-white absolute bottom-5 right-6 font-medium flex items-center gap-x-2'><FontAwesomeIcon icon={faLocationDot} /> View on maps</button>
    </div>
  )
}

export default MapBox