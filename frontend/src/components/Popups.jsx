import React from 'react'

const Popups = () => {
  return (
    <div>
      <div className='absolute z-[1] w-full h-full bg-[#00000090] grid'>
        <form className='place-self-center w-[max(23vw,330px)] tet-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-lg text-sm animate-fadeIn duration-500'>
            <div className="flex justify-between items-center text-black">
                <h2 className='font-medium text-2xl'>{currState === "Sign up" ? "Zarejestruj się" : "Zaloguj się"}</h2>
                <img className='cursor-pointer' src={assets.cross_icon} alt="cross_icon" />
            </div>
            <div className="flex flex-col gap-5">
                {currState === "Login" ? <></> : <input className='outline-none border border-solid border-[#c9c9c9] p-[10px] rounded' type="text" placeholder='Twoje imię' required />}
                <input className='outline-none border border-solid border-[#c9c9c9] p-[10px] rounded' type="email" placeholder='Twój email' required />
                <input className='outline-none border border-solid border-[#c9c9c9] p-[10px] rounded' type="password" placeholder='Hasło' required />
            </div>
            <button className='border-none p-[10px] rounded text-white bg-[#9ACD32] text-[15px] cursor-pointer'>{currState === "Sign up" ? "Stwórz konto" : "Zaloguj"}</button>
            {currState === "Sign up"
             ? <div className='flex items-start gap-2 -mt-[15px]'>
                  <input className='mt-[5px]' type="checkbox" required />
                  <p>Rejestrując się, akceptuję warunki korzystania i politykę prywatności.</p>
               </div>
            : ""
            }
            {currState === "Login"
             ? <p>Utworzyć nowe konto? <span className='font-medium text-[#9ACD32] cursor-pointer'>Kliknij tutaj</span></p>
             : <p>Masz już konto? <span className='font-medium text-[#9ACD32] cursor-pointer'>Zaloguj się tutaj</span></p>
            }
        </form>
    </div>
    </div>
  )
}

export default Popups
