import React from "react";
import about from "../images/about.jpg";
import mission from "../images/mission.gif";
import operations from "../images/operations.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-content-wrapper" id="about-content-wrapper">
      <div className="about-img">
        <img src={about} className="about" alt="laptop" />
      </div>
      <div className="about-txt">
        <h1 className="about-title">
           About Us
           <Hr color="green" />
        </h1>
        <p>
          Arrival entered an if drawing request. How daughters not promotion few
          knowledge contented. Yet winter law behind number stairs garret
          excuse. Minuter we natural conduct gravity if pointed oh no. Am
          immediate unwilling of attempted admitting disposing it. Handsome
          opinions on am at it ladyship.
        </p>
        <p>
          Sussex result matter any end see. It speedily me addition weddings
          vicinity in pleasure. Happiness commanded an conveying breakfast in.
          Regard her say warmly elinor.
        </p>
      </div>
      <div className="mission-txt">
        <h1 className="about-title">
          Our Mission
        </h1>
        <hr />
        <p>
          Promotion an ourselves up otherwise my. High what each snug rich far
          yet easy. In companions inhabiting mr principles at insensible do.
          Heard their facts hoped enjoy vexed cold for. Prosperous so occasional
          assistance it discovered especially no. Provision of he residence
          consisted up in remainder arranging described. Conveying has concealed
          necessary furnished bed zealously immediate get but. Terminated as
          middletons or by instrument. Bred do four so your felt with. No
          shameless principle dependent household do.
        </p>
      </div>
      <div className="mission-img">
        <img src={mission} alt="laptop" />
      </div>
      <div className="operations-img">
        <img src={operations} alt="laptop" />
      </div>
      <div className="operations-txt">
        <h1 className="about-title">
          Operations
        </h1>
        <hr />
        <p>
          In up so discovery my middleton eagerness dejection explained.
          Estimating excellence ye contrasted insensible as. Oh up unsatiable
          advantages decisively as at interested. Present suppose in esteems in
          demesne colonel it to. End horrible she landlord screened stanhill.
          Repeated offended you opinions off dissuade ask packages screened. She
          alteration everything sympathize impossible his get compliment.
          Collected few extremity suffering met had sportsman.
        </p>
      </div>
    </div>
  );
}

export default About;

const Hr = ({ color }) => (
  <hr
      style={{
          color: color,
          //backgroundColor: color,
          height: 5,
          width:"20%"
      }}
  />
);
