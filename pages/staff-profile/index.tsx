import { DonnasCurrentListing, DonnasRecentlySold, DonnasStats, Footer, Header, RequestAgentCard } from '@/components'
import SellerFeedbackCard from '@/components/Cards/SellerFeedbackCard'
import DonnasTeam from '@/components/about/OurFrandlyStaff/DonnasTeam'
import Image from 'next/image'
import React from 'react'

const index = () => {
  const list = ["1","2","3"]
  return (
    <>
      <Header secondaryLinks={[]} />
      <main className="bg-sp-solid-gray-500">
      <div className="bg-sp-pink py-6 border-t-2 border-sp-solid-pink-600">
        <div className="flex gap-x-3 items-center container px-4 mx-auto">
            <div>
              <Image
                alt="small logo"
                width={22}
                height={22}
                src={"/image/current-listing/SmallSquare-dark.png"}
              />
            </div>
            <h1 className="text-base font-medium text-sp-black">Donna Spillane</h1>
          </div>
        </div>
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