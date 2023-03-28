import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Header from './Header';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    
    <div className="Login">
        <Header/>
        <div className='Formcontainer'>
            <Form className='Form'>
          
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
        <Link to={".."} ><Button className='mt-4' variant="primary">Back To Home</Button></Link>
        
    </div>
  );
}

export default Login;
