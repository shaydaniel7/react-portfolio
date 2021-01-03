import React from "react";
import './About.css';
import Navtabs from "../components/Navtabs";
import Footer from "../components/Footer";

function About() {
    return (
        <div class="aboutBackground">
            <Navtabs />
            <br /> <br /> <br />
            <h1>about</h1>
            <br />
            <div class="container" />
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6"><br></br>
                    <div class="aboutBox">
                        <p class = "about">My name is Shay Daniel and I am from Baton Rouge, Louisiana. I earned my degree in elementary
                        education from
                        Louisiana State University and taught fourth grade for several years before moving overseas.
                        When we returned, my husband Chad and I moved to St. Louis, Missouri, where we raised
                        two boys. We
                        moved to Redlands, California in 2007 and I currently work for Loma Linda University
                        Children's
                        Hospital as
                            a medical program specialist at the <a href="http://www.cacsbc.com">Children's Assessment
                                Center</a> in San Bernardino. I enjoy photography, graphic design, hiking and being with my family. <br/><br/>
                                I recently earned a certificate in full-stack web development through the Coding Bootcamp at the University of California, Riverside. I aim to utilize the knowledge I've gained in my present job and beyond. </p>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
            <Footer />
        </div>
    );
}

export default About;