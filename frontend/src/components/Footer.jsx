import React from 'react'
import { assets } from '../assets/assets'

const Footer = ({setShowPopup}) => {
  return (
    <div className='relative bottom-0'>
        <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] p-[20px_8vw] pt-20 mt-[100px]' id='footer'>
            <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20 phone:flex phone:flex-col phone:gap-[35px]">
                <div className="flex flex-col items-start gap-5">
                    <img className='w-[200px]' src={assets.logo} alt="logo" />
                    <p>GlovoApp to rewolucyjna platforma, która przynosi wyjątkową wygodę zamawiania jedzenia prosto pod drzwi. Z szerokim wyborem menu, dostarczamy świeże, smakowite dania do Twojego domu w tempie błyskawicznym. Nasza intuicyjna strona pozwala łatwo przeglądać i zamawiać swoje zamówienia, zapewniając niezrównane doświadczenie użytkownika. Dołącz do milionów zadowolonych klientów i odkryj, dlaczego GlovoApp to najlepsze rozwiązanie dla Twojego głodu! Nie czekaj dłużej - zamów już teraz i delektuj się ulubionymi smakami bez wychodzenia z domu!</p>
                    <div className='flex flex-row'>
                        <a href="https://www.facebook.com" target='_blank'>
                            <img className='w-10 mr-[15px]' src={assets.facebook_icon} alt="facebook_icon" />
                        </a>
                        <a href="https://www.twitter.com" target='_blank'>
                            <img className='w-10 mr-[15px]' src={assets.twitter_icon} alt="twitter_icon" />
                        </a>
                        <a href="https://www.linkedin.com" target='_blank'>
                            <img className='w-10 mr-[15px]' src={assets.linkedin_icon} alt="linkedin_icon" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-5">
                    <h2 className='text-white font-medium text-2xl'>STRONA</h2>
                    <ul>
                        <li className='list-none mb-[10px] cursor-pointer'><a href="#navbar">Strona główna</a></li>
                        <li className='list-none mb-[10px] cursor-pointer'><a href='#navbar' onClick={() => setShowPopup('aboutUs')}>O nas</a></li>
                        <li className='list-none mb-[10px] cursor-pointer'><a href='#explore-menu'>Dostawy</a></li>
                        <li className='list-none mb-[10px] cursor-pointer'><a href='#navbar' onClick={() => setShowPopup('policyPrivacy')}>Polityka prywatności</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-5">
                    <h2 className='text-white font-medium text-2xl'>KONTAKT</h2>
                    <ul>
                        <li className='list-none mb-[10px] cursor-pointer'>+48 123-456-789</li>
                        <li className='list-none mb-[10px] cursor-pointer'>kontakt@glovoapp.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-full h-0.5 m-[20px_0px] bg-[gray] border-none'/>
            <p className="phone:text-center">Copyright 2024 &copy; GlovoApp.com - Wszelkie prawa zastrzeżone.</p>
        </div>
    </div>
  )
}

export default Footer