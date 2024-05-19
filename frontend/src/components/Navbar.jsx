import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);
  
  return (
    <div className='flex justify-between items-center py-5 px-0' id='navbar'>
      <Link to='/'><img onClick={() => setMenu("home")} src={assets.logo} alt="logo" className="w-[150px] laptop:w-[140px] tablet:w-[120px]" /></Link>
      <ul className='flex list-none gap-5 text-[#49557e] text-lg laptop:gap-5 laptop:text-[17px] tablet:gap-[15px] tablet:text-base phone:hidden'>
        <Link to='/'             onClick={() => setMenu("home")}    className={`${menu === "home"    ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Strona główna</Link>
        <a href='/#explore-menu' onClick={() => setMenu("menu")}    className={`${menu === "menu"    ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Menu</a>
        <a href='/#app-download' onClick={() => setMenu("app")}     className={`${menu === "app"     ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Aplikacja</a>
        <a href='/#footer'       onClick={() => setMenu("contact")} className={`${menu === "contact" ? "pb-0.5 border-b-2 border-solid border-[#49557e]" : ""} cursor-pointer`}>Kontakt</a>
      </ul>
      <div className="flex items-center gap-10 laptop:gap-[30px] tablet:gap-[20px]">
        <img className="laptop:w-[22px] tablet:w-[20px]" src={assets.search_icon} alt="search_icon" />
        <div className="relative">
          <Link to='/cart' state={{ setMenu: menu }}><img className="laptop:w-[22px] tablet:w-[20px]" src={assets.basket_icon} alt="basket_icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-[10px] min-h-[10px] bg-[#9ACD32] rounded-[5px] -top-2 -right-2"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} className='bg-transparent text-base text-[#49557e] border border-solid border-[#9ACD32] py-[10px] px-[30px] rounded-[50px] cursor-pointer hover:bg-[#f2fff4] hover:duration-300 laptop:p-[8px_25px] tablet:p-[7px_20px] tablet:text-[15px]'>Zaloguj się</button>
      </div>
    </div>
  )
}

export default Navbar