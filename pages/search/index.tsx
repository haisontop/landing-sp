import { Header, SearchItem, SearchServices } from "@/components"
import { Search } from "@/components"
import Link from "next/link"
import React from 'react'

const index = () => {
  return (
    <div>
        <Header secondaryLinks={[]} />
        <Search category="Sale" />
        <h2 className="text-center mt-12 text-base text-sp-black">Showing <Link href=""  className="underline">Upcoming Auctions First</Link></h2>
        <SearchItem />
        <SearchServices />
    </div>
  )
}

export default index