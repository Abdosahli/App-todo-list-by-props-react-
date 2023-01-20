import React from 'react';
import { useRef } from 'react';

export default function Tsk({txt, delf, tsk}) {

    
    const inp = useRef();

    const change = (e)=>{
        if (e.target.checked){
            
            inp.current.style = "color:#fff;; background-color:rgba(255, 118, 20, 1);text-decoration: line-through;";
            tsk.done=true;

        } else {
            
            inp.current.style = "color:#fff;background:transparent;";
            tsk.done=false;
            
        }
    }

  return (
    <>
    <div >
    
     
     
      <input readOnly type="text" className='todo-tsck' value={txt} ref={inp} />
      <input   type="button" value="Delet" className='todo-delet' onClick={delf}/>
      <input  type="checkbox" onChange={(e)=>change(e)}  id="radio"/>

    </div>
    </>
  )
}
