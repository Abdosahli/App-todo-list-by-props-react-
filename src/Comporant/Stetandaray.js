import { useState } from 'react';


export default function Stet() {
    const [toogle,settoogle]=useState(true)
    const change=()=>{
        settoogle(!toogle);
    }
    let content= toogle ? <h1 className='ctrue'>Titre true</h1> : <h1 className='cfalse'>Titre false</h1>
  return (
    <div>
        {content}
        <h2 className={toogle ? 'ctrue' : 'cfalse'}>Titre two</h2>
        <input type="button" onClick={change} value="changer contenu" />
    </div> 
    
  )
}
