import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import Cadastre from './components/Cadastre';  
import Home from './components/Home';  
import Chat from './components/Chat';  
import FooterMenu from './components/FooterMenu';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastre" element={<Cadastre />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <FooterMenu />
      </div>
    </Router>
  );
}

export default App;
