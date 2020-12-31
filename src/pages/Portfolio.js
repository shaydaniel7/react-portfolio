import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import camera from "../assets/icons/camera.png"
import computercopy from "../assets/icons/computercopy.png"
import design from "../assets/icons/design.png";
import './Portfolio.css';

function Portfolio() {
    return (
        <div class="portBackground">
            <br />
            <h1>portfolio</h1>
            <br />

            <a href="https://www.etsy.com/shop/ShayDaniel"><img src={camera} className="porticons" alt="camera icon" /></a>
            <h5 class="port"><a href="https://www.etsy.com/shop/ShayDaniel">photography</a></h5>


            <a href="https://shaydaniel.com" ><img src={design} className="porticons" alt="computer icon" /></a>
            <h5 class="port"><a href="https://shaydaniel.com">graphic design</a></h5>


            <img src={computercopy} className="porticons" alt="computer icon" />
            <h5 class="port"><a href="/Projects">projects</a></h5>

            <br />
        </div>

    );

}
export default Portfolio;