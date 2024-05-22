import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-5 dark:bg-black' id='explore-menu'>
        <h1 className='text-[#262626] font-medium text-[2rem] dark:text-[#ffffff]'>Poznaj nasze Menu</h1>
        <p className='max-w-[60%] columns-[#808080] laptop:max-w-full laptop:text-sm dark:text-[#BABABA]'>Wybieraj spośród różnorodnego menu obejmującego wyśmienitą gamę dań. Naszą misją jest zaspokojenie Twoich pragnień i podniesienie poziomu doznań kulinarnych, jeden pyszny posiłek na raz.</p>
        <div className='flex justify-between items-center gap-[30px] text-center my-5 mx-0 overflow-x-scroll'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index}>
                        <img className={`${category === item.menu_name ? "border-4 border-solid border-[#9ACD32] p-0.5" : ""} w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] duration-200`} src={item.menu_image} alt="menu_image" />
                        <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer dark:text-[#BABABA]'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='my-[10px] mx-0 h-0.5 bg-[#e2e2e2] border-none dark:bg-[#313131]' />
    </div>
  )
}

export default ExploreMenu