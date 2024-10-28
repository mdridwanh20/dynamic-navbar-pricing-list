import React, { useEffect, useState } from 'react'
import PriceOption from './PriceOption'

export default function PriceOptions() {

    const [options, setOptions] = useState([])
    useEffect( () => {
        fetch('Price_Data.json')
        .then(res => res.json())
        .then(data => setOptions(data))

    },[])


  return (
    <div className='container m-auto py-20 items-center px-3 h-screen grid lg:grid-cols-3 gap-8'>  

            {
                options.map(option => <PriceOption 
                    key={option.id} 
                    option={option} ></PriceOption>)
            }

    </div>
  )
}
