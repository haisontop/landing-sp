import { DonnasCurrentListing, DonnasRecentlySold, DonnasStats, Footer, Header, RequestAgentCard, SubHeader } from '@/components'
import SellerFeedbackCard from '@/components/Cards/SellerFeedbackCard'
import DonnasTeam from '@/components/About/OurFrandlyStaff/DonnasTeam'
import Image from 'next/image'
import React from 'react'

const index = () => {
  const list = ["1","2","3"]
  return (
    <>
      <Header secondaryLinks={[]} />
      <main className="bg-sp-solid-gray-500">
        <SubHeader text={"Donna Spillane"} />
        <div className='lg:grid grid-cols-3 gap-x-16 container mx-auto px-4 mt-10'>
            <div className='col-span-1'>
                <RequestAgentCard />
                <div className='mt-10' />
                <DonnasTeam />
            </div>
            <div className='col-span-2'>
                <DonnasCurrentListing />
                <DonnasRecentlySold />
                <DonnasStats />
            </div>
        </div>
        <section className='mt-[80px] relative'>
        <div className='bg-[#042134] w-full h-5/6 absolute top-40' />
        <div className='container px-4 mx-auto relative z-20'>
            <div className='mt-10 grid grid-cols-3 gap-x-4'>
                {
                    list.map((lst : any) => <SellerFeedbackCard key={lst} />)
                }
            </div>
        </div>
    </section>
      </main>
      <Footer />
    </>
  )
}

export default index