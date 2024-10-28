import React from 'react'

export default function NavLinks({route}) {

    
  return (
        <li className='  md:bg-none  px-4 py-1'>
            <a className='' href="{route.path}"> {route.name} </a>
        </li>
  )
}
