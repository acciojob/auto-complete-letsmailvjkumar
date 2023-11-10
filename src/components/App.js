
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [fruit,setFruit] = useState("")
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  
  const filteredFruits = fruits.filter((item) => item.includes(fruit))

  return (
    <div>
        <input 
          type="text" 
          onChange={(e)=> setFruit(e.target.value)} 
          value={fruit} 
        />
        <ul>
          {
            filteredFruits.map((e, i)=>(
              <li key={i}>{e}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default App
