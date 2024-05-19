import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain relative'>
      <div className='absolute flex items-start align-start flex-col gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn laptop:max-w-[45%] phone:max-w-[65%]'>
        <div className='rounded-[50px] backdrop-blur-[2px]'>
          <h2 className='font-medium text-white text-[max(4.5vw,22px)] px-2'>Zamów swoje ulubione jedzenie!</h2>
          <p className='text-white text-[1vw] phone:hidden px-2'>Najlepsze jedzenie z najpopularniejszych restauracji, zamawiaj ile chcesz, jedz ile chcesz bez ograniczeń, najczęściej wybierane potrawy przez naszych użytkowników. Oferty od fastfoodów po obiady domowe oraz ekskluzywne. Przebieraj w ofertach związanymi z owocami morza.</p>
        </div>
        <a href='#explore-menu'>
          <button className='text-[#747474] mx-2 font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px] border-none phone:p-[2vw_4vw]'>Zobacz Menu</button>
        </a>        
      </div>
    </div>
  )
}

export default Header