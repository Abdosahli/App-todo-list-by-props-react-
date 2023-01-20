
import './App.css';
import Parent from './ComporonteCC1/Parent';
import Recherche from './ComporonteCC1/Recherche';
import Afficher from './ComporonteCC1/Afficher';
import Ajouter from './ComporonteCC1/Ajouter';
import { Routes,Route} from 'react-router-dom';
import Munu from './Rotore/Munu';
function App() {

  return (
   
  <div  >
      <>
      <Munu/>
      <div className='todo-app'>
  <Parent>
  
    <Routes>
    <Route path='/Afficher' element={ <Afficher/>} /> 
    <Route path='/Recherche' element={ <Recherche/>} />
    <Route path='/Ajouter' element={<Ajouter/>} /> 
        
    </Routes>
 </Parent>
 </div >
 </>
  </div>
   
      );
}

export default App;

