import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export interface resourcesTypes {
    id : number
    title : string;
    subtitle : string;
    resources : {
        id : number
    }[];
}

export const ResourcesCard = ({title, subtitle, resources, id}: resourcesTypes) => {
  return (
    <div className={`p-16 bg-white border ${id % 2 != 0 ? 'rounded-l-2xl' : 'rounded-r-2xl'} shadow-2xl shadow-sp-solid-blue-700/20`}>
        <h1 className='text-2xl text-sp-solid-blue-700 font-semibold'>{title}</h1>
        <p className='text-base my-4 text-sp-black'>{subtitle}</p>
        <div className='grid grid-cols-2 gap-x-4 gap-y-1'>
            {
                resources.map((rs : {id : number}) => (
                    <div key={rs.id} className='px-5 py-3 cursor-pointer flex items-center gap-x-5 bg-[#FAFAFA] border-b-2 border-[#707070]'>
                        <FontAwesomeIcon icon={faFilePdf} />
                        <p className='text-[#222222] underline text-base'>Document Name</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
