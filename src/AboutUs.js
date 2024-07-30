import React from "react";
import "./HomePage.css";
import Head from "./Head";
function AboutUs() {
    return (
        <>
            <div>
                < Head />
            </div>
            <div class="text-block">
                <h4 style={{ fontSize: "20px", textDecoration: "none", color: "wheat" }}>This is  Online Vehicle Insurance System</h4>
                <p style={{ fontSize: "20px", textDecoration: "none", color: "aliceblue" }}>Click here to VIS</p>

                <a href="/Register" style={{ textDecoration: "none", color: "white" }}><button style={{ fontSize: "20px", textDecoration: "none" }} > Attempt Now</button></a>




            </div></>
    )
}
export default AboutUs;