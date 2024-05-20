import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  let price = 0;

  const promocodes = [
    {
      _id: 1,
      promocode: "kocham-php",
      promovalue: 15,
    },
    {
      _id: 2,
      promocode: "kocham-reacta",
      promovalue: 20,
    },
    {
      _id: 3,
      promocode: "kocham-androida",
      promovalue: 50,
    }
  ];

  const [code, setCode] = useState("kod");
  const [discount, setDiscount] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [afterPromoPrice, setAfterPromoPrice] = useState(0);

  return (
    <div className='mt-[100px]'>
      <div className="cart-items">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[gray] text-[max(1vw,12px)]">
          <p>Produkt</p>
          <p>Nazwa</p>
          <p>Cena</p>
          <p>Ilość</p>
          <p>Razem</p>
          <p>Usuń</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if(cartItems[item._id] > 0)
            {
              return (
                <div key={{index}}>
                  <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] m-[10px_0px] text-black'>
                    <img className='w-[50px] select-none' src={item.image} alt="item_image" />
                    <p>{item.name}</p>
                    <p>{item.price}zł</p>
                    <p className='border w-4 px-6 py-1 flex justify-center font-light'>{cartItems[item._id]}</p>
                    <p>{item.price * cartItems[item._id]}zł</p>
                    <img onClick={() => removeFromCart(item._id)} className='cursor-pointer w-5 select-none' src={assets.remove_icon} alt="remove_icon" />
                  </div>
                  <hr className='h-[1px] bg-[#e2e2e2] border-none' />
                </div>
              )
            }
        })}
      </div>
      <div className="mt-20 flex justify-between gap-[max(12vw,20px)] phone:flex-col-reverse">
        <div className="flex flex-[1] flex-col gap-5">
          <h2 className='font-bold text-2xl'>Suma</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Podsumowanie</p>
              <p>
                {discount === true
                ? <span>
                    <span className='line-through'>({getTotalCartAmount()}zł)</span>
                    <span> {afterPromoPrice}</span>
                  </span>
                : getTotalCartAmount()
                }
                {console.log(getTotalCartAmount(), afterPromoPrice)}
                 zł</p>
            </div>
            <hr className='m-[10px_0px]' />
            <div className='flex justify-between text-[#555]'>
              <p>Opłata za dostawę</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 6} zł</p>
            </div>
            <hr className='m-[10px_0px]' />
            <div className='flex justify-between text-[#555]'>
              <b>Razem</b>
              <b>
                {getTotalCartAmount() === 0
                 ? 0
                 : (discount === true
                    ? afterPromoPrice+6
                    : getTotalCartAmount()+6
                  )
                } zł
              </b>
            </div>
          </div>
          <div className='flex justify-between phone:flex-col phone:items-center'>
            <button onClick={() => navigate('/order')} className='border-none text-white bg-[#9ACD32] w-[max(15vw,200px)] p-[12px_0px] rounded-[4px] cursor-pointer'>PRZEJDŹ DO KASY</button>
            <button onClick={() => navigate('/')} className='text-[#9ACD32] border border-solid border-[#9ACD32] bg-white w-[max(15vw,200px)] p-[12px_0px] rounded-[4px] cursor-pointer phone:mt-[30px]'>WRÓĆ</button>
          </div>
        </div>
        <div className="flex-[1] phone:justify-start">
          <div>
            <p className='text-[#555]'>Jeśli masz kod promocyjny, wprowadź go tutaj</p>
            <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input onChange={() => setCode(document.getElementById('promocode').value)} className='bg-transparent border-none outline-none pl-[10px]' type="text" placeholder='kod promocyjny' id='promocode' disabled={isDisabled}/>
              <button onClick={() => ((promocodes.some((obj) => obj.promocode.includes(code))) ? (setDisabled(true), setDiscount(true), setAfterPromoPrice(getTotalCartAmount() - parseFloat((getTotalCartAmount() * (promocodes.find((obj) => obj.promocode === code).promovalue/100)).toFixed(2)))) : "")} className='w-[max(10vw,150px)] p-[12px_5px] bg-black border-none text-white rounded-[4px]' disabled={isDisabled}>Zatwierdź</button>
            </div>
            {discount === true
             ? <p className='text-[red]'>Twoja zniżka {promocodes.find((obj) => obj.promocode === code).promovalue}% została aktywowana!</p>
             : ""
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart