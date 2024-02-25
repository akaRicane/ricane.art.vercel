
import { MusicSubPageMasteringCarousel } from "@/components/custom/MusicSubPageMasteringCarousel";
import { MusicSubPagesHeader } from "@/components/custom/MusicSubPagesHeader";
import React from 'react'

export default function MasteringPage() {
  return (
    <div className="h-screen w-full m-0 p-0 flex flex-col">
      <MusicSubPagesHeader />
      <div className="w-full flex justify-center mt-14 mb-8">
        <p>we worked together</p>
      </div>
      <div className="flex self-center mx-24">
        <MusicSubPageMasteringCarousel/>
      </div>
    </div>

  )
}
