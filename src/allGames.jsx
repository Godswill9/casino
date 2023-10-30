import React from 'react'
import './stylings/allGames.css'
import { IoIosSearch, IoIosHeart, IoMdThumbsUp } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdCheckbox, IoMdFlame, IoMdStar, IoIosWarning, IoIosFlash } from 'react-icons/io';



export default function AllGames() {
    // let { id } = useParams();
    const navigate=useNavigate()
  return (
    <div>
        <div className="allCont">
            <div className="inner">
            <div className="headerComp">
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
                <a href="#"><span>All games</span></a>
            </div>
            <div className="allGames">
               <div className="announcement">
                <div className="icon">📣</div>
                <div className="vals">
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                    <div>tima won <span>bbfgbifdsbg</span> on the spin da bottle</div>
                   </div>
               </div>
               <div className="heading">
                <span>All games</span>
                <div className="search-bar">
      <IoIosSearch className="search-icon" />
      <input type="search" name="searchGame" id="search" placeholder='Search for your favorite game' />
    </div>
               </div>
               <div className="headerMobile mobile2">
                <div className='indiv'>
                    <div className="icon"><IoMdCheckbox/></div>
                    <span>All</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoIosHeart/></div>
                    <span>My fav</span>
                </div>
                <div className='indiv'>
                    <div className="icon">< IoMdThumbsUp/></div>
                    <span>Popular</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoMdStar/></div>
                    <span>New</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoIosWarning/></div>
                    <span>Crash</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoIosFlash/></div>
                    <span>Quick</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoMdStar/></div>
                    <span>New</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoIosWarning/></div>
                    <span>Crash</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoIosFlash/></div>
                    <span>Quick</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoMdStar/></div>
                    <span>New</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoIosWarning/></div>
                    <span>Crash</span>
                </div>
                <div className='indiv'>
                    <div className="icon"><IoIosFlash/></div>
                    <span>Quick</span>
                </div>
            </div>
                <div className="games">
                    {
                        arr.map((item, i)=>{
                            return(
                                <div className="aGame" key={i} onClick={()=>{
                                    navigate(`/game/${i}`)
                                }}>
                                <div className="top">
                                    <span className='new'>New</span>
                                    <div className='right'>
                                        <span className="dot"></span>
                                        <span className="players">{item.players} players</span>
                                    </div>
                                </div>
                                <div className="center">
                                    <img src={`${item.img}`} alt="" />
                                </div>
                                <div className="bottom">
                                    <span className='gameName'>{item.name}</span>
                                    <div className="icon"> <IoIosHeart color='red'/></div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}


var arr=[
    {
   players:"210",
   img:"vite.svg",
   name:"Magic ball"
    },
    {
   players:"210",
   img:"vite.svg",
   name:"Magic ball"
    },
    {
   players:"210",
   img:"vite.svg",
   name:"Magic ball"
    },
    {
   players:"210",
   img:"vite.svg",
   name:"Magic ball"
    },
    {
   players:"210",
   img:"vite.svg",
   name:"Magic ball"
    },
    {
   players:"210",
   img:"vite.svg",
   name:"Magic ball"
    },
    
]