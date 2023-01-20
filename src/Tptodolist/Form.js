import React,{useContext} from 'react';
import {ToDo} from './Parent' ;
import Item from './Item' ;


const Form = () => {
        const {task, setTask,arrTasks,add,supprimer} =  useContext(ToDo);

    return (
        <>

        <div >
        <h1>Tasks List</h1>
    <form className="todo-form">
        <input type="text" className='todo-input' placeholder='Add a todo' value={task} onChange={(e)=>{setTask(e.target.value)} } />
        <input type="button" className='todo-button' value="ADD" onClick={()=>(task === "")? alert("Enter a task") : add()}/>
        </form>
        </div>
       
          

        </>




       
    
    );
}

export default Form;
