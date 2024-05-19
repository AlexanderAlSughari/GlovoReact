import React from 'react'

const Header = () => {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-contain relative'>
      <div className='absolute flex items-start align-start flex-col gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn laptop:max-w-[45%] phone:max-w-[65%]'>
        <div className='rounded-[50px] backdrop-blur-sm'>
          <h2 className='font-medium text-white text-[max(4.5vw,22px)]'>Zamów swoje ulubione jedzenie!</h2>
          <p className='text-white text-[1vw] phone:hidden'>Najlepsze jedzenie z najpopularniejszych restauracji, zamawiaj ile chcesz, jedz ile chcesz bez ograniczeń, najczęściej wybierane potrawy przez naszych użytkowników. Oferty od fastfoodów po obiady domowe oraz ekskluzywne. Przebieraj w ofertach związanymi z owocami morza.</p>
        </div>
        <button className='text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px] border-none phone:p-[2vw_4vw]'>Zobacz Menu</button>
      </div>
    </div>
  )
}

export default Header