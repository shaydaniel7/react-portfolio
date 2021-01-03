import React from "react";
import './Home.css';
import Navtabs from "../components/Navtabs";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="homeBackground">
            <Navtabs />
            <br /><br /><br /><br /><br />
            <br />
            <div />
            <h1 className="mainTitle">Shay Daniel</h1>
            <p className="title">web development</p>
            <Footer />
        </div>
    );
}

export default Home;