import React , {useContext} from 'react' ;
import {LINK} from './Parent' ;
import delet from './delete.png'  ;


export default function Recherche() {
    const {ARch, setARch,TaleC,setTableC,ANC,SC,RC,Rch,setRch} = useContext(LINK);
  return (
    <>
    <div>
    <h1>Recherche par ville</h1>
    <form className="todo-form">
    
        <input type="text" className='todo-input'  placeholder='Entrez Une Ville' value={Rch} onChange={(e)=>{setRch(e.target.value)} } name="" id="" />
        <input type="button"  className='todo-button' value="Recherche"  placeholder='Add a todo' onClick={()=>RC()} />
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
        <>
        <tr key={t.id}>
          <td>{t.Nom}</td>
          <td>{t.Tel}</td>
          <td>{t.Ville}</td>
        </tr>
        </>
      )
    })}
  </tbody>
</table>
    </div>
    </div>
    </>
  )
}
