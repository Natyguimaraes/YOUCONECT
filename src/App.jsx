import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Nav from './navigation';
import Cadastre from './cadastre'; // Supondo que você tenha uma página de cadastro
import Home from './home';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastre" element={<Cadastre />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

