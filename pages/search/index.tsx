import { Header } from "@/components"
import { Search } from "@/components"
import React from 'react'

const index = () => {
  return (
    <div>
        <Header secondaryLinks={[]} />
        <Search category="Sale" />
    </div>
  )
}

export default index