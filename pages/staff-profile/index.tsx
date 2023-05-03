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
      <main className="bg-sp-solid-gray-500 pb-[67px] lg:pb-0">
        <SubHeader text={"Donna Spillane"} />
        <div className='lg:grid grid-cols-3 gap-x-16 container mx-auto px-4 mt-10'>
            <div className='lg:col-span-1'>
                <RequestAgentCard />
                <div className='mt-10' />
                <DonnasTeam />
            </div>
            <div className='lg:col-span-2'>
            <div className='mt-[40px] lg:mt-0' />
                <DonnasCurrentListing />
                <DonnasRecentlySold />
                <DonnasStats />
            </div>
        </div>
        <section className='mt-[80px] relative'>
        <div className='lg:bg-[#042134] w-full h-5/6 absolute top-40' />
        <div className='container mx-auto relative z-20 pl-4 lg:pl-0'>
            <div className='mt-10 grid lg:grid-cols-3 grid-flow-col auto-cols-[370px] lg:auto-cols-auto overflow-x-auto gap-x-2 lg:gap-x-4'>
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