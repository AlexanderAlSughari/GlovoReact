import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='flex justify-between items-center py-5 px-0'>
      <img src={assets.logo} alt="logo" className="w-[150px]" />
      <ul className="flex list-none gap-5 text-[#49557e] text-lg">
        <li onClick={() => setMenu("home")}    className={`${menu === "home"    ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Strona główna</li>
        <li onClick={() => setMenu("menu")}    className={`${menu === "menu"    ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Menu</li>
        <li onClick={() => setMenu("app")}     className={`${menu === "app"     ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Aplikacja</li>
        <li onClick={() => setMenu("contact")} className={`${menu === "contact" ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Kontakt</li>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="relative">
          <img src={assets.basket_icon} alt="basket_icon" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-[#9ACD32] rounded-[5px] -top-2 -right-2"></div>
        </div>
        <button className='bg-transparent text-base text-[#49557e] border border-solid border-[#9ACD32] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#f2fff4] hover:duration-300'>Zaloguj się</button>
      </div>
    </div>
  )
}

export default Navbar