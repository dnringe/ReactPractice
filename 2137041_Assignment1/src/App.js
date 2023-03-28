
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Sidenav from './Component/Sidenav';
import Footer from './Component/Footer';
import {Link, Route, Routes} from 'react-router-dom';
import Login from './Component/Login';
import Profile from './Component/Profile';
import Orders from './Component/Orders';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<><Header/><Sidenav/><Footer/></>} />
        <Route path="login" element={ <><Login/></>} />
        <Route path="createaccount" element={ <><Profile/></>} />
        <Route path="orders" element={ <><Orders/></>} />
      </Routes>
    </div>
  );
}

export default App;
