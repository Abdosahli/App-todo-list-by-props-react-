import { createContext } from "react";

import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export const ToDo = createContext();



const Parent = ({children}) => {

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

    const change = (t)=>{
        setArrTasks(
            arrTasks.map((i)=>{
                if(i.id === t.id ){
                    return {...i, done: !i.done};

                }
                return i
            })
        );
    };


    return (
        <div>
            <ToDo.Provider value={{task, setTask,arrTasks, setArrTasks,add,supprimer,change}}>
                {children}
            </ToDo.Provider>
            
        </div>
    );
}

export default Parent;


