import './App.css';
import Create from './Components/create';
import Read from './Components/read';
import Update from './Components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
        <div className="main">
         <div>
           <h1>React Crud Operations</h1>
         </div> 
        <div className='read'>
          <Route exact path='/' component={Read} />
        </div>

         <div className='create'>
           <Route exact path='/create' component={Create} />
         </div>
          <Route path='/update' component={Update} />
     
       </div>
     </Router>

  );
}

export default App;



