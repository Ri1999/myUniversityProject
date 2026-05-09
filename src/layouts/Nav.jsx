
import { useState } from 'react';

import { SiHoneygain } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import Login from "/src/modals/Login";
import About from '../modals/About';

const Nav = () => {

  // for login icon
  const [isModalOpen, setIsModalOpen] = useState(false);

  // for about icon
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="main-nav flexy">


          <div className="nav-left">
            <SiHoneygain size={90} />
            
          </div>
          <div className="nav-right">
            <ul className="flexy " >
              <li><a className="nav-icons" href=""><IoMdHome size={30} /></a></li>


              <li><a onClick={function(){
                setIsAboutOpen(true)
              }} className="nav-icons"  href="#"><FaInfoCircle size={25}/></a></li>


              <li><a className="nav-icons"  href="https://wa.me/91xxxxxxxxxx"><FiMessageCircle size={30} /></a></li>

              <li><a onClick={function(){
                setIsModalOpen(true)
              }} className="nav-icons"  href="#"><FaRegCircleUser size={25} /></a></li>
            </ul>
          </div>


        </div>
      </nav>

      <Login
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)} 
      />

      <About open={isAboutOpen}

      close={function(){
        
        setIsAboutOpen(false)

      }} />

    </div>
  )
}

export default Nav