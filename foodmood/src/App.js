import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
import Editor from './features/editor'; 


function App() {

  return (
    <Router>
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/journal'>Journal</Link>
      </div>
      <div className="App">
        <Switch>
          <Route path="/journal" component={Editor}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
