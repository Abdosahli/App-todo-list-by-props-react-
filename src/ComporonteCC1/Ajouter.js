import React,{useContext} from 'react' ;
import { LINK } from './Parent' ;
import delet from './delete.png'  ;

export default function Ajouter() {
    const {Itel, setItel,Iville, setIville,Inom, setInom,ANC,SC,ARch} = useContext(LINK);
    var virifiN = /^(\+212)[6-7]{1}[0-9]{8}$/;
  return (

    <div >
      <h1>Ajouter Un Nouveau Contact</h1>
      <form className="todo-form" >
        <input type="text" className='todo-input' placeholder='Entrez Un Nom' name="" value={Inom} onChange={(e)=>setInom(e.target.value)} id="" />
        <input type="text" className='todo-input' placeholder='Entrez Un Téléphone ' name="" value={Itel} onChange={(e)=>setItel(e.target.value)} id="" />
        <input type="text" className='todo-input' placeholder='Entrez Une Ville' name="" value={Iville} onChange={(e)=>setIville(e.target.value)} id="" /> <br />
        <input type="button" className='todo-button' value='Ajouter' onClick={()=>{  if(Inom=="" || Itel=="" || Iville==""){alert("Enterz Nom Ou ville Corect !!")} else{ if(virifiN.test(Itel)){ANC()} else{alert("Enterz Un Numeber Corect !!")} }  }}/>
      </form>
      <hr />
      <div>

      <table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Téléphone</th>
      <th>Ville</th>
    </tr>
  </thead>
  <tbody >
    {ARch.map((t) => {
      return (
        <tr key={t.id}>
          <td>{t.Nom}</td>
          <td>{t.Tel}</td>
          <td>{t.Ville}</td>
          
        </tr>
      )
    })}
  </tbody>
</table>
    </div>
    </div>
  )
}
