import React, { createContext,useState} from 'react' ; 
import {v4 as uuidv4} from 'uuid';

import delet from './delete.png'  ;



export const LINK = createContext();


export default function Parent({children}) {
//
    const [TaleC,setTableC] = useState([
        {id:uuidv4() ,
            Nom:"Ahmade" ,
            Tel:"+212609865550",
            Ville:"Tanger"
        },
        {id:uuidv4() ,
            Nom:"Hicham" ,
            Tel:"+212691639036",
            Ville:"Tanger"
        },
        {id:uuidv4() ,
            Nom:"Ayoub" ,
            Tel:"+212606306384",
            Ville:"Tanger"
        },
        {id:uuidv4() ,
            Nom:"Mohamed" ,
            Tel:"+212609865550",
            Ville:"Tanger"
        },
        {id:uuidv4() ,
            Nom:"Yousef" ,
            Tel:"+212642041617",
            Ville:"Casa"
        }
    ]);


//
    const [Inom, setInom] = useState("");
    const [Itel, setItel] = useState("");
    const [Iville, setIville] = useState("");


//
    const ANC = () =>{
        let selectT = [...TaleC] ;
        let newobject = {} ;
        newobject.id = uuidv4() ;
        newobject.Nom = Inom ;
        newobject.Tel = Itel ;
        newobject.Ville = Iville ;
        selectT.push(newobject) ; 
        setTableC(selectT) ;
        setInom("");
        setItel("");
        setIville("");
        setARch(selectT);
    }


//
const SC = (id) =>{
    let selectT = TaleC.filter((t)=>{
        return t.id !== id  ;
    })
    setTableC(selectT);
}


// 
const [Rch, setRch] = useState("");
const [ARch, setARch] = useState([]);
const RC = () =>{
    let selectT = TaleC.filter((t)=>{
        return t.Ville === Rch  ;
    })
    setARch(selectT);
    setRch("");


 
}
 //
const Trier=()=>{
    let selectT =[...TaleC];
    selectT.sort( (a, b) => {
    return a.Nom.localeCompare(b.Nom);
  });
  setTableC(selectT);
  }


  return (
    <div>
      <LINK.Provider value={{ARch, setARch,TaleC,setTableC,Itel, setItel,Iville, setIville,Inom, setInom,ANC,SC,RC,Rch, setRch,Trier}}>
        {children}
      </LINK.Provider>
    </div>
  )
}

