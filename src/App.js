import './sass/main.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<h1>Recipes</h1>} />
        <Route path="/plnner" element={<h1>Planner</h1>} />
        <Route path="/pantry" element={<h1>Pantry</h1>} />
        <Route path="/shopping" element={<h1>Shopping</h1>} />
        <Route path="/signin" element={<h1>Sign In</h1>} />
        <Route path="/signup" element={<h1>Sign Up</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
