import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import './App.css';
import Subject from './Subjects';
import AGBT from './Subjects/ABGT';
import CPT from './Subjects/CPT';
import BE from './Subjects/BE';
import THERMO from './Subjects/THERMO';


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
            <Route exact path='/AGBT'>
              <AGBT/>
            </Route>

            <Route exact path='/THERMO'>
              <THERMO/>
            </Route>
            <Route exact path='/BE'>
              <BE/>
            </Route>
            <Route exact path='/CPT'>
              <CPT/>
            </Route>
          </Switch>

          <Footer />

        </div>
      </div>
    </Router>
  );
}

export default App;
