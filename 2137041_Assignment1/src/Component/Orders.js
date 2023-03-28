import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Header from './Header';


function Orders() {
  return (
    
    <div className="Orders">
        <Header/>
        
        <Link to={".."} ><Button className='mt-4' variant="primary">Back To Home</Button></Link>
        
    </div>
  );
}

export default Orders;
