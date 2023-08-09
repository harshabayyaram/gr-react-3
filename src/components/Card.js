import React from "react";
import "../../src/style.css";
import location from "../images/location-dot-solid.svg";
import online from "../images/status.svg";

function Card(props) {
  return (
    <div className="t-card">
      <div className="top">
        <div className="img">
          <img src={props.profile} />
        </div>
        <h3 className="design">{props.designation}</h3>
        <h5 className="fee">{props.fee}</h5>
      </div>
      <div className="bottom">
        <h4 className="name">{props.name}</h4>

        <h6>
          <span className="loc">
            <img src={location} />
          </span>
          {props.location}
        </h6>

        <h7 className="bio">{props.bio}</h7>
        <br />
        <div className="btn">
          <button className="cv">VIEW CV</button>
        </div>
        <div className="btn">
          <button className="offer">MAKE OFFER</button>
        </div>
        <div className="status">
          <span>
            <img src={online} />
          </span>
          {props.status}
        </div>
      </div>
    </div>
  );
}


export default Card;