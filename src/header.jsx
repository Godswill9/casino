import React from 'react'
import './stylings/game.css'
import { IoIosChatbubbles, IoIosMenu, IoIosArrowBack,} from 'react-icons/io';

export default function Header() {
  return (
    <div className='headerCont'>
        <div className="innerHead">
        <div className="nav">
        <div className="icon"> <IoIosArrowBack size={22} /></div>
       <div className="amt">0.00</div>
       <div className="name">Sporty Hero</div>
       <div className="msg"><IoIosChatbubbles size={22} /></div>
       <div className="icon"><IoIosMenu size={22} /></div>
        </div>
   <div className="allOdds">
    <div className="vals">
    <span className="odd color1">1.47x</span>
     <span className="odd color2">1.47x</span>
     <span className="odd color3">1.47x</span>
     <span className="odd color4">1.47x</span>
     <span className="odd color1">1.47x</span>
     <span className="odd color2">1.47x</span>
     <span className="odd color3">1.47x</span>
    </div>
     <span className="history">
        <span>Round history</span>
        <span className='icon'></span>
     </span>
   </div>
        </div>
    </div>
  )
}
