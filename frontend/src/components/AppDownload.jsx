import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='m-auto mt-[100px] text-[max(3vw,20px)] text-center font-medium dark:bg-black' id='app-download'>
      <p className='dark:text-[#ffffff]'>Dla lepszego działania pobierz <br/> GlovoApp&reg;</p>
      <div className="flex justify-center gap-[max(2vw,10px)] mt-10">
        <img className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer duration-500 hover:scale-105 select-none' src={assets.play_store} alt="play_store" />
        <img className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer duration-500 hover:scale-105 select-none' src={assets.app_store} alt="app_store" />
      </div>
    </div>
  )
}

export default AppDownload