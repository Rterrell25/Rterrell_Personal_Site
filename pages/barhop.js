import Nav from "../components/nav";
import css from "./style/index.css";
import { Link } from "react-scroll";

const Barhop = props => (
  <div className={css.barhop_body}>
    <div className={css.barhop_head}>
      <Nav />
    </div>
    <div className={css.container}>
      <img src="../static/bar.jpg" className={css.top} alt="oddjobs_image" />
      <div className={css.textblock}>
        <div className={css.topblock}>
          <Link to="barhop_image" smooth={true} offset={50} duration={1500}>
            <div className={css.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <br />
    <div className={css.oddjobs_image_div} id="barhop_image">
      <img
        src="https://i.imgur.com/j8GO18n.jpg"
        className={css.barhop_image}
        alt="oddjobs"
      />
    </div>
    <br />
    <div className={css.developertag}>BarHop</div>

    <div className={css.aboutMeTwo}>
      <div className={css.aboutMeTwoP}>
        <div className={css.developerpara}>
          <div className={css.p2}>
            {" "}
            Looking for the best Nightlife in your city? We've got you covered.
            City by city, night by night. Our app provides users with the top
            drinking places based on their location. Users have access to
            detailed information about each bar as well reviews other users have
            left about that location. The technologies used to code this project
            include: React.js, Node.js, Javascript, and the Yelp API .{" "}
          </div>
          <br />
          <div className={css.icon_container}>
            <div className={css.button_cont}>
              <a
                className={css.example_e}
                href="https://github.com/Rterrell25/Bar_Hop_React_App"
                target="_blank"
                rel="nofollow noopener"
              >
                GitHub
              </a>
            </div>
            <div className={css.button_cont}>
              <a
                className={css.example_e}
                href="https://barhop-wyncode.herokuapp.com/"
                target="_blank"
                rel="nofollow noopener"
              >
                Heroku
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className={css.oddjob_pose}>
      <img
        src="https://i.imgur.com/0OQZDh0.png"
        className={css.pose}
        id="pose"
        alt="pose"
      />
    </div>
    <div>
      <div className={css.footer}>Hey</div>
    </div>
  </div>
);

export default Barhop;
