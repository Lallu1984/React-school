import './App.css';
import Linn from './Linn';
import Linn2 from './Linn2';
import Linn3 from './Linn3';
import Linn4 from './Linn4';
import Linn5 from './Linn5';
import Linn6 from './Linn6';

function App() {

  return (
  <div className="App">
 <header className="App-header">
 <h1>EUROOPA PEALINNAD</h1>
 </header>
  <div className="kontainer">
    <div>
      <Linn />
    </div>
    <div>
      <Linn2 />
    </div>
    <div>
      <Linn3 />
    </div>
    <div>
      <Linn4 />
    </div>
    <div>
      <Linn5 />
    </div>
    <div>
      <Linn6 />
    </div>
  </div>
  </div>
    );
}

export default App;
