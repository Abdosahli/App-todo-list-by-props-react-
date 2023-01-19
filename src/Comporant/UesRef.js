import { useState, useEffect, useRef } from "react";

export default function UesRef() {
    const loisir=useRef([]);


    const add=(el)=>{
        loisir.current.push(el);
    }

    const checkall=()=>{
        for(let i=0;i<loisir.current.length;i++){
            loisir.current[i].checked=true;
        }
    }

    const uncheckall=()=>{
        for(let i=0;i<loisir.current.length;i++){
            loisir.current[i].checked=false;
        }
    }

    var bb='';
    const checkall_some=()=>{
        for(let i=0;i<loisir.current.length;i++){
            if(loisir.current[i].checked){
                bb=bb+loisir.current[i].value+"  ";
            }
        } 
        alert(bb)
        bb=''
    }
    

     
        

  return (
    <>
        <h1>Loisire : </h1>
        <input type="checkbox" value="sport" ref={add} id="" />sport <br /> <br />
        <input type="checkbox" value="football" ref={add} id="" />football <br /> <br />
        <input type="checkbox" value="playing_the_games" ref={add} id="" />playing_the_games <br /> <br />

        <input type="button" onClick={checkall} value="Checkall" />
        <input type="button" onClick={uncheckall} value="UnCheckall" />
        <input type="button" onClick={checkall_some} value="Checkall some" /> <br /> <br />

      
    
    </>
  )
}
