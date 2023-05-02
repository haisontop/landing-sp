import React, { useState } from 'react'
import { accordionsType } from './Accordions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

const AccordionsCard = ({id, question, answer} : accordionsType) => {
    const [open, setOpen] = useState(false)
  return (
    <div className='cursor-pointer bg-white px-7 py-5 border border-sp-solid-gray-600 mb-2 rounded-lg'>
    <div className='w-full flex justify-between items-center text-base font-medium text-sp-black' onClick={()=>setOpen(!open)}>
        <h2>{question}</h2>
        {
            open ? 
           <FontAwesomeIcon icon={faAngleUp} className='text-xl text-[#707070]' />
           :
           <FontAwesomeIcon icon={faAngleDown} className='text-xl text-[#707070]' />
        }
    </div>
        <div className={`text-[#707070] overflow-hidden transition-all  duration-500 ${open ? 'h-40 mt-4 ' : 'h-0'}`}>
           {answer}
        </div>
    </div>
  )
}

export default AccordionsCard