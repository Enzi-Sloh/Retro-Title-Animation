
import './App.css';
import { Router } from '@reach/router'; 
import Home from './views/Home'


function App() {
  return (
    <div className="App">
<Router>
  <Home path="/"></Home>
</Router>
    </div>
  );
}

export default App;
