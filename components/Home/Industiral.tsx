import React from 'react'
import { Tag } from '../Tag';
import { Button } from '../Buttons';

interface cardProps{
    id: number;
    tag: string;
    title: string;
    description: string;
}

const Card = ({id, tag, title, description}: cardProps) => {
    return(
        <div className='bg-white rounded-3xl border border-sp-solid-gray-600'>
            <div className='p-8 border-b border-sp-solid-gray-600/50'>
                <Tag label={tag} />
                <h1 className='mt-4 font-semibold text-2xl text-sp-solid-blue-800'>
                    {title}
                </h1>
            </div>
            <p className='p-10 pb-0 text-sp-solid-gray-800 text-base'>
                {description}
            </p>
            <button className='font-semibold text-base underline text-sp-solid-blue-800 px-10 pb-10 pt-4'>
                Keep Reading
            </button>
        </div>
    )
}

export const Industiral = () => {
    const data = [
        {
            id: 1,
            tag: 'Buying tips and advice',
            title : 'The Benefits of Buying in a Suburban Neighborhood',
            description : "This post will explore the advantages of purchasing a home in a suburban area, including access to good schools, lower crime rates, and more green space…"
        },
        {
            id: 2,
            tag: "Selling & the buying process",
            title : 'The Pros and Cons of Buying a Fixer-Upper',
            description : "This post will explore the potential benefits and drawbacks of purchasing a fixer-upper property, including the potential for equity growth and the…"
        },
        {
            id: 3,
            tag: "Industry news and updates",
            title : 'How to Choose the Right Location for Your Home',
            description : "This post will discuss key factors to consider when selecting a location for your next home, such as proximity to schools, work, and amenities…"
        }
    ]
  return (
    <>
    <div className='grid grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-4 container mx-auto px-4 mt-16'>
        <div className='mb-4 lg:mb-0'>
            <h1 className='text-3xl font-bold text-sp-black'>Industry Knowledge</h1>
            <p className='mt-4'>
            This is a short description about the list to sell ratio statistic, why is this good? Keep to two lines max.
            </p>
            <Button label='View more knowledge articles' type='blue' className='mt-10' />
        </div>
        {
            data.map((dt : cardProps)=><Card key={dt.id} title={dt.title} tag={dt.tag} description={dt.description} id={dt.id} />)
        }
    </div>
     <Button label='View more knowledge articles' type='blue' className='mt-6 mx-auto  justify-center lg:hidden' />
    </>
  )
}
