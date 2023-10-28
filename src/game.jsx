import React, {useState} from 'react'
import './stylings/game.css'
import Header from './header'
import GameEnv from './gameEnv'

export default function Game() {
    // const [isDarkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //   setDarkMode(!isDarkMode);
    // };
  return (
    <div className='gameCont'>
        <div className="inner">
            <Header/>
            <GameEnv/>
            <div className="bettingSection">
                <div className="left">
                    <div className="totalBets">
                        <div className='one'>TOTAL BETS: <span>323</span></div>
                        <div className="wins">TOP WINS</div>
                    </div>
                    <div className="topBets">
                        <div className="topHead">CURRENT TOP BETS</div>
                        <div className="topNav">
                            <span>Name</span>
                            <span>Bet/Win</span>
                            <span>Coeff</span>
                        </div>
                        <div className="topBody">
                            {
                                arr.map((item, i)=>{
                                    return(
                                        <div className='player'>
                            <span>{item.name}</span>
                            <span>{item.odd}</span>
                            <span>{item.coeff}</span>
                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="allBetCont">
                    <div className="switches">
                        <div className="switchCont">
                            <h5>Auto bet</h5>
                              <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
                        </div>
                        <div className="switchCont">
                            <h5>Auto Cashout</h5>
                              <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label> 
                        </div>
                    </div>
                    <div className="betCont1">
                        <div className="regulator">
                            {/* <div className="headRegulator"> */}
                                <div className="top">
                                    <div className="minMax">
                                        <div className="min">Min: 30</div>
                                        <div className="min">Max: 100000</div>
                                    </div>
                                    <div className="elem">
                                        <div className="icon minus">-</div>
                                        <span className='num'>50</span>
                                        <div className="icon plus">+</div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="odd">50</div>
                                    <div className="odd">100</div>
                                    <div className="odd">500</div>
                                    <div className="odd">5k</div>
                                </div>
                            {/* </div> */}
                        </div>
                        <button className='betButton'>Bet</button>
                    </div>
                    </div>
                    <div className="allBetCont">
                    <div className="switches">
                        <div className="switchCont">
                            <h5>Auto bet</h5>
                              <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
                        </div>
                        <div className="switchCont">
                            <h5>Auto Cashout</h5>
                              <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
                        </div>
                    </div>
                    <div className="betCont1">
                        <div className="regulator">
                            {/* <div className="headRegulator"> */}
                                <div className="top">
                                    <div className="minMax">
                                        <div className="min">Min: 30</div>
                                        <div className="min">Max: 100000</div>
                                    </div>
                                    <div className="elem">
                                        <div className="icon minus">-</div>
                                        <span className='num'>50</span>
                                        <div className="icon plus">+</div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="odd">50</div>
                                    <div className="odd">100</div>
                                    <div className="odd">500</div>
                                    <div className="odd">5k</div>
                                </div>
                            {/* </div> */}
                        </div>
                        <button className='betButton'>Bet</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


var arr=[
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
{
    name:"Randy",
    odd:"50k/.......",
    coeff:""
},
]