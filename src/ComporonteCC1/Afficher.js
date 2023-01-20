import React , {useContext} from 'react' ;
import {LINK} from './Parent' ;
import delet from './delete.png'  ;
export default function Afficher() {
    const {TaleC,setTableC,ANC,SC,RC,Rch,setRch,Trier} = useContext(LINK);


  return (
    
    <div>
      <h1>La Liste Des Contacts</h1>
       <table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Téléphone</th>
      <th>Ville</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody >
    {TaleC.map((t) => {
      return (
        <tr key={t.id}>
          <td>{t.Nom}</td>
          <td>{t.Tel}</td>
          <td>{t.Ville}</td>
          <td><img src={delet} alt="" id="radio" className='todo-delet' onClick={()=>SC(t.id)}/></td>
        </tr>
      )
    })}
  </tbody>
</table>
<br />
<br />
      <input type="button"  className='todo-button' value="Trier" onClick={()=>Trier()} />
    </div>
  )
}
