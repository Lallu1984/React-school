import './App.css'
import Luuletus1 from './Luuletus1';
import Luuletus2 from './Luuletus2';
import Luuletus3 from './Luuletus3';
import Luuletus4 from './Luuletus4';
import Luuletus5 from './Luuletus5';

function App() {
  return (
    <div>
      <div className='App-header'>
        <h1>Luuletused</h1>
      </div>
      <div className='main'>
        <div className='l1'>
          <Luuletus1 />
        </div>
        <div className='l2'>
          <Luuletus2 />
        </div>
        <div className='l3'>
          <Luuletus3 />
        </div>
        <div className='l4'>
          <Luuletus4 />
        </div>
        <div className='l5'>
          <Luuletus5 />
        </div>
      </div>
      
    </div>
  );
}

export default App;
