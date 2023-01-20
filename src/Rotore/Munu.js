import React from 'react'
import { Link } from 'react-router-dom'
export default function Munu() {
  return (
    <div className='todo-contact'>
        <h1 id="h1h">Application De Gestion Des Contacts </h1>
        <ul>
          <li><Link to={'/Ajouter'} >Ajouter</Link></li>
          <li><Link to={'/Recherche'} >Recherche</Link></li>
          <li><Link to={'/Afficher'} >Afficher</Link></li>
        </ul>
    </div>
  )
}
