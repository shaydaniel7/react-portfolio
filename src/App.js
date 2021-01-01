import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Navtabs";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";


import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navtabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Projects" component={Projects} />
        
        
      </div>
      <Footer />
    </Router>
  );
}

export default App;
