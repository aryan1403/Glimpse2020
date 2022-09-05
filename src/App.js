import { Link } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/home';


function authBtns() {
  return (
    <>
    <Link to="/login"><button class='btn btn-primary'>Login</button></Link>
    <Link to="/register"><button class='btn btn-primary'>Register</button></Link>
    </>
  );
}

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    </>
  );
}

export default App;
