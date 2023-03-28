import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/Update';

function App() {
  return (

    <Router>
      <div className="main">
        <div>
          <h3 className='heading'>React Crud Operations</h3>
          <br></br>
        </div>
        <br></br>
        <div>
          <Route exact path='/' component={Create} />
        </div>

        <div >
          
          <Route exact path='/Read' component={Read} />
        </div>

        <Route path='/Update' component={Update} />
        

        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br>
        
      </div>
    </Router>
  );
}

export default App;