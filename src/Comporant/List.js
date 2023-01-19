import { useState } from 'react';

export default function Lista() {
    const [acount,setAcount]=useState([
        {nom:'med',prenom:'helo',groub:'dev108'},
        {nom:'ahmed',prenom:'hi',groub:'dev107'}
    ])

  return (
    <div>
        <ul>
            
            {
                    acount.map((el,index)=>{
                        return <li key={index}>INDEX : {index}  nom : {el.nom}  prenom : {el.prenom} groub : {el.groub}</li>
                    })
            }
        </ul>
    </div>
  )
}
