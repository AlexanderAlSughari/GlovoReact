import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='w-full m-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] delay-300 animate-fadeIn duration-1000 dark:bg-[#0c0a09]'>
      <div className='relative'>
        <img className='w-full rounded-[15px_15px_0px_0px] select-none' src={image} alt="food-item-image" />
        {!cartItems[id]
            ? <img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%] select-none' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add_icon" />
            : <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-[white]'>
                <img className='w-[30px] select-none' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="remove_icon" />
                <p>{cartItems[id]}</p>
                <img className='w-[30px] select-none' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add_icon" />
              </div>
        }
      </div>
      <div className="p-5 min-h-[250px] flex flex-col justify-evenly " >
        <div className='flex justify-between mb-[10px]'>
            <p className='text-[20px] font-medium dark:text-[#d4d4d4]'>{name}</p>
            <img className='w-[70px] object-contain select-none' src={assets.rating_stars} alt="rating_stars" />
        </div>
        <p className="text-[#676767] dark:text-[#B8B8B8] text-xs">{description}</p>
        <p className='text-[#9ACD32] text-[22px] font-medium m-[10px_0px]'>{price}zł</p>
      </div>
    </div>
  )
}

export default FoodItem