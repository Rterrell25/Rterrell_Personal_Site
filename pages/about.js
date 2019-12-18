import Nav from "../components/nav";
import css from "./style/index.css";
import { Link } from "react-scroll";

const About = props => (
  <div className={css.about_body}>
    <div className={css.head}>
      <Nav />
    </div>
    <div className={css.container}>
      <img src="../static/about.jpg" className={css.about_image} alt="about" />
      <div className={css.textblock}>
        <div className={css.topblock}>
          <Link to="pose" smooth={true} offset={50} duration={1500}>
            <div className={css.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div>
      <img
        src="https://i.imgur.com/6PN1sUf.png"
        className={css.pose}
        id="pose"
        alt="pose"
      />
    </div>
    <div className={css.developertag}>My journey as a developer.</div>
    <div className={css.aboutMeTwo}>
      <div className={css.aboutMeTwoP}>
        <div className={css.developerpara}>
          <div className={css.p2}>
            I am originally from Indianapolis, Indiana. After graduating from
            Indiana University, I found work at a small/large business loan
            vendor in Coral Springs, FL. While I enjoyed my time working as a
            financial analyst, I didn't feel as though my career path was
            fulfilling. After perusing the internet unsure of the next step in
            my journey, I came across a coding boot camp known as Wyncode
            Academy. The rest is history. Web development has changed my life. I
            can't go a day without coding and I love learning something new
            every single day.
          </div>
        </div>
      </div>
    </div>
    <br />
    <div>
      <div className={css.footer}>Hey</div>
    </div>
  </div>
);

export default About;
