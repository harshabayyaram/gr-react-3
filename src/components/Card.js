import React from "react";
import "../../src/style.css";
import profile from "../images/profile.jpg";
import location from "../images/location-dot-solid.svg";
import online from "../images/online.svg"


function CardData(props){
    
}

function Card() {
  return (
    <div className="t-card">
      <div className="top">
        <div className="img">
          <img src={profile} />
        </div>
        <h3 className="design">Film Director, Producer</h3>
        <h5 className="fee">$14/hour</h5>
      </div>
      <div className="bottom">
        <h4 className="name">Jeffrey Abrams,51</h4>

        <h6>
          <span  className="loc">
            <img src={location} />
          </span>
          New York, United States
        </h6>

        <h7 className="bio">
          Abrams was born in newyork city and raised in los angeles
        </h7>
        <br />
        <div className="btn">
          <button className="cv">VIEW CV</button>
        </div>
        <div className="btn">
          <button className="offer">MAKE OFFER</button>
        </div>
        <div className="status"><span><img src= {online}/></span> Online</div>
      </div>
    </div>
  );
}

export default Card;
