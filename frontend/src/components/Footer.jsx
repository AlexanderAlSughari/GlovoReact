import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] p-[20px_8vw] pt-20 mt-[100px]' id='footer'>
        <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20 phone:flex phone:flex-col phone:gap-[35px]">
            <div className="flex flex-col items-start gap-5">
                <img className='w-[200px]' src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                <div className='flex flex-row'>
                    <img className='w-10 mr-[15px]' src={assets.facebook_icon} alt="facebook_icon" />
                    <img className='w-10 mr-[15px]' src={assets.twitter_icon} alt="twitter_icon" />
                    <img className='w-10 mr-[15px]' src={assets.linkedin_icon} alt="linkedin_icon" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className='text-white font-medium text-2xl'>STRONA</h2>
                <ul>
                    <li className='list-none mb-[10px] cursor-pointer'>Strona główna</li>
                    <li className='list-none mb-[10px] cursor-pointer'>O nas</li>
                    <li className='list-none mb-[10px] cursor-pointer'>Dostawy</li>
                    <li className='list-none mb-[10px] cursor-pointer'>Polityka prywatności</li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-5">
                <h2 className='text-white font-medium text-2xl'>KONTAKT</h2>
                <ul>
                    <li className='list-none mb-[10px] cursor-pointer'>+1-212-456-78900</li>
                    <li className='list-none mb-[10px] cursor-pointer'>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-0.5 m-[20px_0px] bg-[gray] border-none'/>
        <p className="phone:text-center">Copyright 2024 &copy; GlovoApp.com - Wszelkie prawa zastrzeżone.</p>
    </div>
  )
}

export default Footer