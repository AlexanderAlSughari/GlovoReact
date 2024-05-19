import React, { useContext } from 'react'
import { food_list } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='mt-[30px]' id='food-display'>
      <h2 className='text-[#262626] font-semibold text-[min(30px)] phone:text-[max(2vw,24px)]'>Najlepsze dania blisko ciebie</h2>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-[30px] gap-[30px] gap-y-[50px]'>
        {food_list.map((item, index) => {
          if(category === "All" || category === item.category)
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay