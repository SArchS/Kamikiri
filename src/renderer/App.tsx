import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../../assets/logo/kamikiri.png';
import './App.css';

const Hello = () => {
  return (
    <div>
      <img width="200" alt="icon" src={logo} />
      <h1 style={{ textAlign: 'center' }}>Kamikiri</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
