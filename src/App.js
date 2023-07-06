import './sass/main.scss';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Profile from './pages/Profile';
import ProfileSettings from './pages/ProflieSettings';
import ForgotPassword from './pages/ForgotPass';
import SetNewPassword from './pages/SetNewPass';
import Planner from './pages/Planner';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import SearchResults from './pages/SearchResults';
import ShoppingList from './pages/ShoppingList';
import Pantry from './pages/Pantry';
import Bookmarks from './pages/Bookmarks';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<Recipe />} />
        <Route path="recipes/search" element={<SearchResults />} />

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

        <Route path="profile-settings" element={
          <PrivateRoute>
            <ProfileSettings />
          </PrivateRoute>
        } />

        <Route path="forgot-password" element={
            <ForgotPassword />
        } />
        <Route path="set-new-password" element={
          <PrivateRoute>
            <SetNewPassword />
          </PrivateRoute>
        } />

        <Route path="Bookmarks" element={ 
          <PrivateRoute>
            <Bookmarks />
          </PrivateRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
