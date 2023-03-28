import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Content() {
  return (
    <div className="Content">
      <h4>Shop by Category</h4>
            <div className='cardss'>  
                <a href='' className='cardcon'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"></img>
                    <h4>Mobiles</h4>
                </a>
                <a href='' className='cardcon'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"></img>
                    <h4>Electronics</h4>
                </a>
                <a href='' className='cardcon'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"></img>
                    <h4>Appliances</h4>
                </a>
                <a href='' className='cardcon'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"></img>
                    <h4>Fashion</h4>
                </a>
                <a href='' className='cardcon'>
                    <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"></img>
                    <h4>Toys</h4>
                </a>
                <a href='' className='cardcon'>
                    <img src="https://img.freepik.com/free-icon/menu_318-388431.jpg"></img>
                    <h4>All Categories</h4>
                </a>
            </div>
            <div className='newarrivals'>
                <div className='title'>
                    <h4>New Arrivals</h4>
                    <p>Check our newest launches</p>
                    <Button variant="primary">See All New Launches</Button></div>
                <a className='iteminfo'>
                    <img src='https://m.media-amazon.com/images/I/71K84j2O8wL._AC_SY400_.jpg'></img>
                    <p>Oneplus 11<Badge bg="info">Rs 59,999</Badge></p>
                </a> 
                <a className='iteminfo'>
                    <img src='https://fdn2.gsmarena.com/vv/pics/honor/honor-magic5-pro-1.jpg'></img>
                    <p>Honor Magic 5 Pro<Badge bg="info">Rs 9,999</Badge></p>
                </a>  
                <a className='iteminfo'>
                    <img src='https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-2.jpg'></img>
                    <p>Oneplus 11<Badge bg="info">Rs 9,999</Badge></p>
                </a> 
                <a className='iteminfo'>
                    <img src='https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg'></img>
                    <p>Samsung S23 Ultra<Badge bg="info">Rs 9,999</Badge></p>
                </a> 
            </div>
            <div className='todaydeals'>
                <div className='title'>
                    <h4>Today Deals</h4>
                    <p>Grab Hot Deals</p>
                    <Button variant="primary">See All Deals</Button></div>
                <a className='iteminfo'>
                    <img src='https://m.media-amazon.com/images/I/71K84j2O8wL._AC_SY400_.jpg'></img>
                    <p>Oneplus 11<Badge bg="info">Rs 9,999</Badge></p>
                </a> 
                <a className='iteminfo'>
                    <img src='https://fdn2.gsmarena.com/vv/pics/honor/honor-magic5-pro-1.jpg'></img>
                    <p>Samsung S23 Ultra<Badge bg="info">Rs 9,999</Badge></p>
                </a>  
                <a className='iteminfo'>
                    <img src='https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-2.jpg'></img>
                    <p>Oneplus 11<Badge bg="info">Rs 9,999</Badge></p>
                </a> 
                <a className='iteminfo'>
                    <img src='https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg'></img>
                    <p>Samsung S23 Ultra<Badge bg="info">Rs 9,999</Badge></p>
                </a> 
            </div>
    </div>
  );
}

export default Content;
