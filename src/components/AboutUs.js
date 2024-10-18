import React from "react";
import chef1 from "../icons_assets/Mario and Adrian b.jpg";
import chef2 from "../icons_assets/Mario and Adrian A.jpg";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="about-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>

                <div className="chefs">
                    <img id="chefs-item-1" src={chef1} alt="chef1" />
                    <img id="chefs-item-2" src={chef2} alt="chef2" />
                </div>
            </div>
        </>
    )
}

export default About;