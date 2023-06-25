import './sass/main.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import PrivateRoute from './components/PrivateRoute';
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
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<Recipe />} />

        <Route path="planner" element={
          <PrivateRoute>
            <Planner />
          </PrivateRoute>
        } />
        <Route path="pantry" element={
          <PrivateRoute>
            <Pantry />
          </PrivateRoute>
        } />
        <Route path="shoppinglist" element={
          <PrivateRoute>
            <ShoppingList />
          </PrivateRoute>
        } />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />

        <Route path="forgot-password" element={
    
            <ForgotPassword />
        } />
        <Route path="set-new-password" element={
          <SetNewPassword />
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
