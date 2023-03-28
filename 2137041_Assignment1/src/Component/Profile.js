import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Header from './Header';


function Profile() {
  return (
    
    <div className="Profile">
        <Header/>
        <h4>Profile </h4>
        <Link to={".."} ><Button className='mt-4' variant="primary">Back To Home</Button></Link><br></br>
        <Link to={"/login"} ><Button className='mt-4' variant="info">Back To Login</Button></Link>
    </div>
  );
}
<Profile/>
export default Profile;
