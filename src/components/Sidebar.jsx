import React, {useState} from 'react'
import '../styles/Sidebar.css'

// images 

import logo from '../images/logo.png'
import { sideBarData } from './Data/Data'
import { FaSignOutAlt } from 'react-icons/fa'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

  return (
    <div className='sidebar'>
            {/* logo */}
            <div className="logo">
                <img src={logo} alt="" />
                <span>ME<span>T</span>A</span>
            </div>

            {/* menu  */}

            <div className="menu">
               {sideBarData.map((item, index) => {
                   return (
                    <div className={selected ===index? 'menu-item active' : 'menu-item'} key={index}
                    onClick={() =>setSelected(index)}
                    >
                       <item.icon color='red' size={25}/>
                       <span>
                           {item.heading}
                       </span>
                    </div>
                   )
                  
               })}

               <div className="menu-item">
                   <FaSignOutAlt />
               </div>
            </div>


    </div>
  )
}

export default Sidebar