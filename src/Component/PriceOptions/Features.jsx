import React from 'react'
import { GoCheckCircle } from "react-icons/go";

export default function Features({feature}) {
    console.log(feature);
    
  return (

        <div className='flex text-white items-center '>
            <GoCheckCircle className='mr-2'></GoCheckCircle>
            {feature} 
        </div>

  )
}
