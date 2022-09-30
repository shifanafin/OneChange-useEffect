import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [valueText,setvalue] =useState("")
  const [name,setName] =useState("")


  useEffect(()=>{
             setName(valueText)
  })
  return (
    <div>
    <form>
        <input
          type="text"
          value={valueText}
          onChange={(e) => setvalue(e.target.value)}
          placeholder="Your Name"
        />
        <p>{name}</p>
      </form>
</div>
  
  )
  }

export default App;
