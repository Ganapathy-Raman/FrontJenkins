import React from "react";
import "./HomePage.css";
import Header from "./Header";
function FrontPage() {
    return (
        <>
            <div>
                < Header />
            </div>
            <div class="text-block">
                <h4 style={{ fontSize: "20px", textDecoration: "none", color: "wheat" }} >This is  Online Vehicle Insurance System</h4>
                <p style={{ fontSize: "20px", textDecoration: "none", color: "aliceblue" }} role="sub">Click here to VIS</p>

                <a href="/Register" style={{ textDecoration: "none", color: "white" }}><button style={{ fontSize: "20px", textDecoration: "none" }} role="button"> Attempt Now</button></a>




            </div></>
    )
}
export default FrontPage;