import React from 'react'
import Button from '../layouts/Button'
import img from '../assets/img/home.png'


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#AB6B2E] to-[#FFDCAB] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">The taste of coffee that will give you unforgettable feels</h1>
        <p>There are many options for enjoyment in our coffee shop</p>

        <div className=" flex flex-row gap-6">
            <Button title="ADD TO CARD"/>
            <Button title="MORE MENU"/>
        </div>
      </div>

      <div className="relative">
        <img  src={img} alt='img' />
      </div>
    </div>
  )
}

export default Home
