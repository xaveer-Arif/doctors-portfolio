import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Pages/Context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
        <Route exact path = '/'>
          <Home></Home>
        </Route>
        <Route path = '/home'>
          <Home></Home>
        </Route>
        <Route path = '/appointment'>
          <Appointment></Appointment>
        </Route>
        <Route path = '/login'>
          <Login></Login>
        </Route>
        <Route path = '/register'>
          <Register></Register>
        </Route>
        
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
