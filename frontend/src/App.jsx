import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
import Popups from './components/Popups'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    {showPopup ? <Popups setShowPopup={setShowPopup}/> : <></>}
      <div className='w-4/5 m-auto  dark:bg-black'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
    <Footer setShowPopup={setShowPopup} />
    </>
  )
}

export default App