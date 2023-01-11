
import './App.css';
import { Routes, Route } from "react-router-dom"
import Play from './Page/Play';
import Home from './Page/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/play" element={ <Play/> } />
          <Route path="/" element={ <Home/> } />
        </Routes>
        
    </div>
  );
}

export default App;
