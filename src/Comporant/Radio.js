import { useState } from 'react';

export default function Radio() {
    const [sixe,setSixe] = useState('')
    const [options,setOptions] = useState(['tanzanya','codivwar','mali']);
    const [newOption,setNewOption]=useState('')
    const pushTable=()=>{
        let newTabl = [...options,newOption] ;
        setOptions(newTabl);
    }
  return (
    <>

    <h1>hilo {sixe}</h1>
    <input type="radio" name="f" id="" onClick={(e)=>setSixe(e.target.value) } value="fam" />F
    <input type="radio" name="f" id="" onClick={(e)=>setSixe(e.target.value)}  value="mal"/>M
    <br />
    <br />
    <select name="" id="">
      { options.map((j) => {
            return <option value="j">{j}</option>
        } )}

    </select>
    <br />
    <br />
     <input type="text" onChange={(e)=>{setNewOption(e.target.value)}} name="add" id="add" />
     <br />
     <input type="button" onClick={pushTable}  value="validere" />
    
    </>
  )
}
