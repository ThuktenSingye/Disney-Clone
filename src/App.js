import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import login component
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path='/' element={<Login />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
