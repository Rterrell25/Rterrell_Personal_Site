import Nav from "../components/nav";
import css from "./style/index.css";
import { Link } from "react-scroll";

const Oddjobs = props => (
  <div className={css.oddjobs_body}>
    <div className={css.oddjob_head}>
      <Nav />
    </div>
    <div className={css.container}>
      <img src="../static/plumber.jpg" className={css.top} alt="oddjobs" />
      <div className={css.textblock}>
        <div className={css.topblock}>
          <Link to="oddjob_image" smooth={true} offset={50} duration={1500}>
            <div className={css.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div className={css.oddjobs_image_div} id="oddjob_image">
      <img
        src="https://i.imgur.com/Tojgmv8.png"
        className={css.oddjobs_image}
        alt="oddjobs_image"
      />
    </div>
    <br />
    <div className={css.oddjobdevelopertag}>Oddjobs</div>

    <div className={css.aboutMeTwo}>
      <div className={css.aboutMeTwoP}>
        <div className={css.oddjobdeveloperpara}>
          <div className={css.oddjobp2}>
            {" "}
            Looking for a contractor in the Miami area? My team and I built this
            site in order to pair consumers with reliable contractors. While
            building the site we made sure to maintain a simplistic design that
            allowed for a heightened user experience. The technologies used to
            code this project include: React.js, Ruby on Rails, Calendly
            Integration and Google Maps API.{" "}
          </div>
          <br />

          <div className={css.icon_container}>
            <div className={css.button_cont}>
              <a
                className={css.example_e}
                href="https://github.com/Rterrell25/Oddjobs_React_App"
                target="_blank"
                rel="nofollow noopener"
              >
                GitHub
              </a>
            </div>
            <div className={css.button_cont}>
              <a
                className={css.example_e}
                href="https://oddjobs-react.herokuapp.com/"
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
        src="https://i.imgur.com/gf5DGs3.png"
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

export default Oddjobs;
