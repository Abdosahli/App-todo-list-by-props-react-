import { React, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Tsk from './Tsk';

export default function Tasks (){

    const [task, setTask] = useState("");
    const [arrTasks, setArrTasks] = useState([
        {id:uuidv4() ,name: "Sport", done:false },
        {id:uuidv4() ,name: "Coder en React", done:false},
        {id:uuidv4() ,name: "Film", done:false}
    ]);

    const add = ()=>{
        let allTasks = [...arrTasks];
        let nTsk = {};
        nTsk.id = uuidv4();
        nTsk.name = task;
        nTsk.done = false;
        allTasks.push(nTsk);
        setArrTasks(allTasks);
        setTask("");
    }
    
    const supprimer = (id)=>{
        let allTasks = arrTasks.filter((t)=>{
            return t.id !== id;
        });
        setArrTasks(allTasks);
    } 

    return(
        <>

        <div >
        <h1>Tasks List</h1>
    <form className="todo-form">
        <input type="text" className='todo-input' placeholder='Add a todo' value={task} onChange={(e)=>{setTask(e.target.value)} } />
        <input type="button" className='todo-button' value="ADD" onClick={()=>(task === "")? alert("Enter a task") : add()}/>
        </form>
        </div>
       
        <div>

            {    
                arrTasks.map((t)=>{
                    return(
                        <ul key={t.id} className='todo-row '>
                                    <li key={t.id}>
                                        <Tsk txt={t.name} delf={()=>supprimer(t.id)} tsk={t}/>
                                    </li>
                                </ul>
                            )
                        })
                    }
        </div>
        </>
    )
}