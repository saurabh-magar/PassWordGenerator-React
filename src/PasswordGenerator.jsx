import React, { useEffect, useState } from 'react'
import "./pass.css"


function PasswordGenerator() {
  const [length,setLenght]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [specialCharacter,SetSpecialCharacter]=useState(false)
  const [password, setPassword] = useState("");
  function handleRange(event){
       setLenght(event.target.value)
  }
  function numberCheck(){
    if(numberAllowed){
      setNumberAllowed(false);
    }
    else{
      setNumberAllowed(true)
    }
  }
  function characterCheck(){
    if(specialCharacter){
      SetSpecialCharacter(false)

    }
    else{
      SetSpecialCharacter(true)
    }
  }
  
  function generatePassword(){

     var string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed){
      string+="0123456789"
     }
     if(specialCharacter){
      string+="!@#$%^&*()_+"
     }
     var pass="";
     for(let i=0;i<length;i++){
      var index=Math.floor(Math.random()*string.length)
      pass+=string.charAt(index)
      
     }
     setPassword(pass)
     console.log(password);
     
  }
  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,specialCharacter,setPassword])

  return (
    <>
    <div className="container">
      <input type="text" value={password} readOnly />
      <div className='subContainer'>
        <input type="range" min={8} max={100}  onInput={handleRange}/>
        <label htmlFor="length">length {length}</label>

        <input type="checkBox" checked={numberAllowed} onChange={numberCheck} name="" id="" />
        <label htmlFor="Number">Number </label>

        <input type="checkBox" checked={specialCharacter} onChange={characterCheck}  />
        <label htmlFor="specialCharacter">Special Character</label>
        
      </div>
    </div>

    </>
  )
}

export default PasswordGenerator