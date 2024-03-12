import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import './App.css';
import Subject from './Subjects';


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

            <Route exact path='/subject'>
              <Subject />
            </Route>


          </Switch>

          <Footer />

        </div>
      </div>
    </Router>
  );
}

export default App;
