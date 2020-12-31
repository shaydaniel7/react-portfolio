import React from "react";
import './Contact.css';



function Contact() {
    return (

        <div class="contactBackground">
            <br />
            <h1>contact</h1>
            <br />
            <form />
            
            <label for="exampleFormControlInput1"></label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" />
         
            <label for="exampleFormControlInput1"></label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" />

            <label for="exampleFormControlTextarea1"></label>
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="message" rows="3"></textarea>

            <br />


        </div>

    );
}

export default Contact;