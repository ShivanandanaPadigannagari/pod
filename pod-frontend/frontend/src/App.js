import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header';
import { isAuthenticated,isAuthorized } from './utilities/utilityfunctions';
import Signup from './pages/Signup';
import { Navigate } from 'react-router'
import UpdateProfile from './pages/UpdateProfile';
import AllEmployees from './pages/AllEmployees';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import Employee from './pages/Employee';
const user = isAuthenticated();
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Signup />} />
      <Route path='/' element={user ? <Home />: <Navigate to="/login" />} />
      <Route path='/updateprofile' element={user ? <UpdateProfile />: <Navigate to="/login" />} />
      <Route path='/viewallemployees' element={user ? isAuthorized() ? <AllEmployees />: <Navigate to="/" /> : <Navigate to="/login" />} />
      <Route path='/addemployee' element={user ? isAuthorized() ? <AddEmployee /> : <Navigate to="/" /> : <Navigate to="/login" />} />
      <Route path='/updateemployee' element={user ? isAuthorized() ? <UpdateEmployee /> : <Navigate to="/" /> : <Navigate to="/login" />} />
      <Route path='/employee' element={user ? isAuthorized() ? <Employee /> : <Navigate to="/" /> : <Navigate to="/login" />} />


      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className="h-100 mx-auto">
      {isAuthenticated() && <Header/>}
      <AppRoutes />
    </div>
  );
}

export default App;