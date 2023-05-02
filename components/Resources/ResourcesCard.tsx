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
    <div className={`px-4 py-6 lg:p-16 bg-white border-sp-solid-gray-600 border-2 ${id % 2 != 0 ? 'rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl mt-4 lg:mt-0 border-b-0 lg:border-b-2' : 'rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl  border-t-0 lg:border-t-2 border-b-2 border-l-2 lg:border-l-0'} shadow-2xl shadow-sp-solid-blue-700/20`}>
        <h1 className='text-2xl text-sp-solid-blue-700 font-semibold'>{title}</h1>
        <p className='text-base my-4 text-sp-black'>{subtitle}</p>
        <div className='grid lg:grid-cols-2 gap-x-4 gap-y-1'>
            {
                resources.map((rs : {id : number}) => (
                    <div key={rs.id} className='px-5 py-3 cursor-pointer flex items-center gap-x-5 bg-[#FAFAFA] border-b border-sp-solid-gray-800'>
                        <FontAwesomeIcon icon={faFilePdf} className='text-sp-solid-gray-800' />
                        <p className='text-sp-solid-gray-800 underline text-base'>Document Name</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
