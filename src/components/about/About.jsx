import "./about.css";

import download from "../../img/download.jfif";

import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card ">
          <img src={download} className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I am a creative designer and developer, who aims to work with small
          businesses and marginalized communities to bring their passions to
          life. I offer both design and development services of web applications
          or websites!
        </p>
        <div className="a-award">
          <img src={Award} className="a-award-img" />
          <div className="a-award-texts">
            <div className="a-award-title">
              <h4>International Design Awards 2021</h4>
            </div>
            <p className="a-award-desc"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
