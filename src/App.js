import './sass/main.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPass';
import SetNewPassword from './pages/SetNewPass';
import Planner from './pages/Planner';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import ShoppingList from './pages/ShoppingList';
import Pantry from './pages/Pantry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<Recipe />} />

        <Route path="planner" element={<Planner />} />
        <Route path="pantry" element={<Pantry />} />
        <Route path="shoppinglist" element={<ShoppingList />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />

        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="set-new-password" element={<SetNewPassword />} />

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
