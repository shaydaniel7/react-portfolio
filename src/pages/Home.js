import React from "react";
import './Home.css';
import Navtabs from "../components/Navtabs";
import Footer from "../components/Footer";

function Home() {
    return (
        <div class="homeBackground">
            <Navtabs />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br />
            <div />
            <h1>Shay Daniel</h1>
            <p class="title">web development</p>
            <Footer />
        </div>
    );
}

export default Home;