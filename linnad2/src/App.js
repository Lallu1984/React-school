
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import './App.css';
import Card4 from './Card4';
import Card5 from './Card5';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EUROOPA PEALINNAD</h1>
      </header>
      <div className='cards'>
        <div>
          <Card1 />
        </div>
        <div>
          <Card2 />
        </div>
        <div>
          <Card3 />
        </div>
        <div>
          <Card4 />
        </div>
        <div>
          <Card5 />
        </div>
      </div>
    </div>
  );
}

export default App;
