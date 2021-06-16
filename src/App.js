import './App.css';
import Header from "./MyComponent/Header";
import PianoUI from './MyComponent/PianoUI';
import About from "./MyComponent/About";
import Footer from "./MyComponent/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" render={() => {
          return (
            <>
              <PianoUI />
            </>)
        }} >
        </Route>
        <Switch>
          <Route exact path="/About" render={() => {
            return (
              <>
                <About />
              </>)
          }} >
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
