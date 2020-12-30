import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



// function Navbar(props) {

function Navbar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-brand">Shay Daniel</div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/">
                home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Portfolio">
                portfolio
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/About">
                about
              </Link>
            </li>
            <li class="nav-item">
              <Link to="Contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <a class="navbar-brand" href="index.html">Shay Daniel</a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        //         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div class="navbar-nav">
        //             <a class="nav-link" href="portfolio.html">portfolio</a>
        //             <a class="nav-link" href="about.html">about</a>
        //             <a class="nav-link" href="contact.html">contact</a>
        //             <a class="nav-link"
        //                 href="https://drive.google.com/file/d/1M46az7g_5E_D4fAkchgApDl7N1K41d3a/view?usp=sharing">resume</a>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navbar;