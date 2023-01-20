import React,{useContext} from 'react';
import {ToDo} from './Parent' ;
import allow from './allow.png' ;
import delet from './delete.png' ;
import edit from './edit.png' ;
import { useRef,useState } from 'react';



const Item = () => {

    const {task, setTask,arrTasks,add,supprimer,change} =  useContext(ToDo);
   
    

    

    return (
        <>
      
    <div>
{    
    arrTasks.map((t)=>{

        

        return(
            <ul key={t.id} className='todo-row ' >
                        <li  key={t.id}>
                            <input readOnly type="text"  value={t.name} key={t.id} className={t.done ? "complete" : "todo-tsck" }/>
                           
                            <img src={allow} alt="" onClick={()=>change(t)}   id="radio" />
                            <img  src={edit} alt="" className='todo-delet'   />
                            <img  src={delet} alt="" className='todo-delet' onClick={()=>supprimer(t.id)}  />


                        </li>
                    </ul>
                )
            })
        }
    
     
     
                



        </div>
        </>
    );
}

export default Item;
