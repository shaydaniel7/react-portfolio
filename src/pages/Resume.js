import React from "react";
import './Resume.css';
import ResumeBlock from "../components/ResumeBlock"
import Navtabs from "../components/Navtabs";
import Footer from "../components/Footer";

function Resume() {
    return (

        <div className="contactBackground">
            
            <Navtabs />
            <br /><br /><br />
            <h1>resume</h1>
            <br />
            <ResumeBlock />
            <Footer />
           
        </div>
    );
}

export default Resume;