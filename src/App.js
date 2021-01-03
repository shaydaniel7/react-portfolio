import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Projects" component={Projects} />
          
      </div>
    </Router>
  );
}

export default App;
