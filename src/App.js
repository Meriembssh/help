import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path="/Dashboard" element = {<Dashboard/>} />
        <Route path="/Statistics" element = {<Statistics/>} />
        <Route path="/Settings" element = {<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;
