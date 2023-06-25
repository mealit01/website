import './sass/main.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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
  const userInfo = useSelector(state => state.userInfo);
  const resetPassword = useSelector(state => state.resetPassword);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<Recipe />} />

        <Route path="planner" element={
          <PrivateRoute condition={userInfo}>
            <Planner />
          </PrivateRoute>
        } />
        <Route path="pantry" element={
          <PrivateRoute condition={userInfo}>
            <Pantry />
          </PrivateRoute>
        } />
        <Route path="shoppinglist" element={
          <PrivateRoute condition={userInfo}>
            <ShoppingList />
          </PrivateRoute>
        } />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={
          <PrivateRoute condition={userInfo}>
            <Profile />
          </PrivateRoute>
        } />

        <Route path="forgot-password" element={
    
            <ForgotPassword />
        } />
        <Route path="set-new-password" element={
          // <PrivateRoute condition={resetPassword}>
            <SetNewPassword />
          // </PrivateRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
