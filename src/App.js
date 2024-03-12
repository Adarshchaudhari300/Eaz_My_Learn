import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import './App.css';


function App() {


  return (
    <Router>
      <div className="App">
        <div className="bg2">

          <Navbar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>


          </Switch>

          <Footer />

        </div>
      </div>
    </Router>
  );
}

export default App;
