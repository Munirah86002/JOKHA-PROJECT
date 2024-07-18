
import './App.css';


import View from './View';
import Register from './Register';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Menu from './Menu';
import LogOriginal from './LogOriginal';
function App() {
  return (
   <>
   <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LogOriginal}/>
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/Register' component={Register}/>
            <Route path='/View' component={View}/>
            <Route path='/Menu' component={Menu}/>
           
        </Switch>
    </BrowserRouter>
   
   </>
    
  );
}

export default App;
