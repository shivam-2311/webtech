import React from 'react'
import Common from "./Common";
import shiv from "../images/soft.png";

function About() {
    return (
        <div>
            <Common  name='Welcome to About page' imgsrc={shiv} visit='./contact' btnname='contact now'/>
        </div>
    )
}

export default About
