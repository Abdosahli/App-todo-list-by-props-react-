
import './App.css';
import Parent from './Tptodolist/Parent';
import Form  from './Tptodolist/Form';
import Item from './Tptodolist/Item';


function App() {

  return (
   
  <div className='todo-app' >
        <Parent>
          <Form/>
          <Item/>
        </Parent>
  </div>
   
      );
}

export default App;

