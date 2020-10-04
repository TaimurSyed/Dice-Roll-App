import React, { useState } from 'react';

//return JS element, combo of javascript, html, CSS. React uses function.
 function App() {
  
  return (
    <div style={{textAlign: 'center'}}>
      <header>
        <h2 style= {{textdecoration: "overline" ,backgroundColor: "Cornsilk", borderStyle: "dotted", fontStyle: "oblique" , fontFamily: "Georgia", borderColor: "DarkCyan", color: "Purple", padding:"10px", letterSpacing: "3px"}}> 
         Welcome to the Dice Roll App!

        </h2>
       

    
      </header>
    
       <Dice/>
      
    
    </div>
  );
}


  function generateRoll() {
    return Math.round( Math.random() * (6 - 1) + 1);
  }
  
  const DiceImage = (roll) => {
    if (roll === 1) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";
    } else if (roll === 2) {
      return "https://www.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png" ;
    } else if (roll === 3) {
      return  "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png";
    } else if (roll === 4) {
      return "https://www.netclipart.com/pp/m/125-1259562_file-dice-4-svg-dice-4-svg.png";
    } else if (roll === 5) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/1200px-Dice-5.svg.png";
    } else if (roll === 6) {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dice-6a.svg/1200px-Dice-6a.svg.png";
    }
  };

const Dice = () => {
   const [count, setCount] = useState(null);
   const [pic, setPic] = useState(null)
    

  return (
    <div style={{ borderStyle: "ridge", width: "700px", textAlign: 'center', opacity: 0.7, backgroundColor: "MistyRose", marginLeft: "1200px"}}>
      
      <header>
    
        <h2 style= {{fontWeight: "50px",fontFamily: "cursive",fontSize: 30, color: "FireBrick"}}>
          Please click the button to roll the dice!
        </h2>
        <button 
        
        onClick={() => {
           let x = generateRoll();

          setCount(x); setPic(DiceImage(x))}}>
           Roll Dice

        </button>
        <p style={{fontSize: "20px",color: "black", fontStyle: "italic"}}>
          The dice rolled onto side: {count} 
        </p>
        <img src= {pic} alt=" Dice side" width="100"/>

      </header>
     
    </div> 
    

  );

}
  export default App;
