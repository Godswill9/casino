import React, { useState, useEffect } from 'react';

function getRandomNumber() {
  // Generate a random number between 1 and 58 (inclusive)
  return Math.floor(Math.random() * 58) + 1;
}

export default function GameEnv() {
  const [image, setImage] = useState([
    '/image_processing20191122-10251-1ovilw2.gif',
    '/inazuma-eleven-go-galaxy-inago-galaxy.gif',
    '/player_on_a_football.png',
  ]);
  const [loader, setLoader] = useState(0);
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(0);
  const incrementValue = 0.1;
  const [display, setDisplay]=useState('flex')
  const [display2, setDisplay2]=useState('none')

    useEffect(() => {
      const interval = setInterval(() => {
        setLoader((prevLoader) => {
          const newLoader = prevLoader + 10;
          if (newLoader >= 100) {
            setLoader(0);
            setNum((prev) => (prev + 1) % image.length);
            setDisplay('none');
            setDisplay2('flex');
            setValue(0);
          }
          return newLoader;
        });
      }, 200);
  
      return () => {
        clearInterval(interval); // Clear the interval on component unmount
      };
    }, [image]);
  
    const bet = () => {
      const stopTimer = getRandomNumber();
      const adjustedStopTimer = stopTimer < 10 ? stopTimer * 10 : stopTimer;
      let counter = 0;
  
      const interval = setInterval(() => {
        counter++;
        setValue((prevValue) => prevValue + incrementValue);
  
        if (counter === adjustedStopTimer) {
          setDisplay('flex');
          setDisplay2('none');
          setLoader(0);
          clearInterval(interval); // Stop the interval when counter reaches stopTimer
        }
      }, 300);
  
      return () => {
        clearInterval(interval); // Clear the interval on component unmount
      };
    };

    useEffect(() => {
      bet(); // Call the bet function inside the useEffect
    }, []); // Empty dependency array, so it runs only once when the component mounts
  
  

  return (
    <div className="gameEnv">
      <img src={image[num]} alt="" />
      <div className="powerUpIndicator" style={{display:display}}>
        <h3>Powering up for the next round</h3>
        <div style={{ width: `${loader}%` }} className="line"></div>
      </div>
      <div className="oddsCounter"  style={{display:display2}}>
      {value.toFixed(2)}x
      </div>
    </div>
  );
}
