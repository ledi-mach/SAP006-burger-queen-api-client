import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
//import { Item } from '../Item/index'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)

  let menu
  let menuMask
  
  if (showMenu === true) {
    menu =
      <div className="menuzinho">
        <p className="iconsLink">Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </div>

    menuMask =
      <div
        className="bg-black fixed top-0 left-0 w-full h-full">
      </div>
  }


  return (
    <nav className='lala'>
      <span className="text-xl">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => { setShowMenu(!showMenu) }}

        />
      </span>


      {menu}
      {menuMask}
    </nav>
  )
}
export default Navigation

