import React from 'react'

const ServicesCard = ({ image, service }) => {
  return (
    <div className="relative flex justify-center items-center flex-wrap">
      <div className="group relative w-48 h-36 m-3 object-cover object-center">
        <div className="group-hover:-translate-y-6 group-hover:-translate-x-6 absolute top-0 w-48 h-28 z-10 transition-all duration-500	ease-in-out rounded-md">
          <img src={image} alt="image" className="rounded-lg object-cover object-center w-full h-full" />
        </div>
        <div className="group-hover:translate-y-14 group-hover:translate-x-14 w-40 h-15 mt-8 object-cover resize transition-all duration-500 ease-in-out bg-gray-400 rounded-md">
          <div className="text-sm text-center cursor-pointer">
            {service}<br />
            <span>Click here</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard