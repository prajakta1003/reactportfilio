import "./about.css";


import download from "../../img/download.jfif";

import Award from "../../img/award.png"
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
          Hey, this is my homepage, so I have to say something about myself.
        </p>
        <p className="a-desc">
          I am a person who is positive about every aspect of life. There are
          many things I like to do, to see, and to experience. I like to read, I
          like to write; I like to think, I like to dream; I like to talk, I
          like to listen. I like to see the sunrise in the morning, I like to
          see the moonlight at night; I like to feel the music flowing on my
          face, I like to smell the wind coming from the ocean. 
        </p>
        <div className="a-award">
            <img src={Award} className="a-award-img" />
            <div className="a-award-texts">
                <div className="a-award-title">
                <h4>International Design Awards 2021</h4></div>
                <p className="a-award-desc">
                    gjhkjkm sdfghjk tyukmnbggji hguyil
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
