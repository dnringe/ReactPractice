import Home from './Vector.png';
import User from './User.png';
import Buying from './Buying.png';
import Settings from './Settings.png';
import Login from './Login.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Content from './Content';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


function Sidenav(){
    return(
        <div className="Sidenav">
      
{/* <Col sm={3} className="navitems"> 
            <a className='item' href="" ><p><img src={Profile} alt="Profile" width="30" height="30"/>Home</p></a>
            <a href="" ><p><img src={User} alt="Profile" width="30" height="30"/>Profile</p></a>
            <a href="" ><p><img src={Buying} alt="Orders" width="30" height="30"/>Orders</p></a>
            <a href="" ><p><img src={Settings} alt="Settings" width="30" height="30"/>Settings</p></a>
            <a href="" ><p><img src={Login} alt="Settings" width="30" height="30"/>Login</p></a>

        </Col> */}
        <Row>
        <Col md={2} className="navitems" id="col1"> 
            <Nav className="flex-column">
                <Link to=""><p><img src={Home} alt="Profile" width="30" height="30"/>Home</p></Link>
                <Link to="Profile"><p><img src={User} alt="Profile" width="30" height="30"/>Profile</p></Link>
                <Link to="Orders"><p><img src={Buying} alt="Orders" width="30" height="30"/>Orders</p></Link>
                <Link to="Settings"><p><img src={Settings} alt="Settings" width="30" height="30"/>Settings</p></Link>
                <Link to="Login" ><p><img src={Login} alt="Settings" width="30" height="30"/>Login</p></Link>
            </Nav>
        </Col>
        <Col md={10} id="col9" className="content">
         <Content /> 
        </Col>
        
    </Row> 
         
        </div>
    )
}
<Sidenav/>

export default Sidenav;