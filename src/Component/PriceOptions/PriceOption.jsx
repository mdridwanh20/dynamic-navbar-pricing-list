import React from 'react'
import Features from './Features'

export default function PriceOption({option}) {
    const {name, price, features} = option
    

  return (
    <div className='bg-blue-600 rounded-md h-96 flex flex-col space-y-1 p-4'>
            
           <div className='mb-5 text-white'>
              <p className='font-bold text-3xl  text-center'> ${price} </p>
                  <h2 className='text-center '>
                      <span className='font-bold text-4xl'>{name}</span>
                      <span className='text-lg'>/mon</span>
                  </h2>
           </div>

          
           <div className='flex-grow'>
              {
                  features.map(feature => <Features 
                    key={feature.id} feature={feature} ></Features>)
                }
           </div>

            <div className=''> 
                  <button className='bg-white my-2 text-blue-700 w-full rounded-md py-1'> Buy Now </button>
            </div>

    </div>
  )
}
