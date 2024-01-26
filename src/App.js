import './App.css';
import Navbar from './components/header';
import News from './views/dashboard'

function App() {


  return (
    <div className="App">

<Navbar />
<div className='card'>


      <News />
</div>
     
    </div>
  );
}

export default App;
