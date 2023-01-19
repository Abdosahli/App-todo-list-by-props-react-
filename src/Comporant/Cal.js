
import React, { useState } from 'react'



export default function Cal() {

    const [nm1,setnm1]=useState(0);
    const [nm2,setnm2]=useState(0);
    const [nm3,setnm3]=useState(0);

    function sum(){
        setnm3(parseInt(nm1)+parseInt(nm2));
    }

  return (
    
    <div>
      <input type="number" onChange={(event) =>
                {
                  setnm1(event.target.value);     
                   
                }}></input>

      <input type="number" onChange={(event) =>
                {
                  setnm2(event.target.value);     
                   
                }}></input>
      <br></br>
      <button  onClick={sum}>SOMME</button>
      <br></br>
      <input type="number" value={nm3}></input>
    </div>
  )
}
