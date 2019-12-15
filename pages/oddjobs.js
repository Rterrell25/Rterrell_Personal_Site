import Nav from "../components/nav";
import css from "./style/index.css";

const Oddjobs = props => (
  <div className={css.oddjobs_body}>
    <div className={css.oddjob_head}>
      <Nav />
    </div>
    <div className={css.oddjobs_image_div}>
      <img
        src="https://i.imgur.com/Tojgmv8.png"
        className={css.oddjobs_image}
      />
    </div>
    <br />
    <div className={css.developertag}>Oddjobs</div>
    <br />
    <div className={css.aboutMeTwo}>
      <div className={css.aboutMeTwoP}>
        <div className={css.developerpara}>
          <div className={css.p2}>
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
            <div className={css.developertag}>
              Click here to view Github repo
            </div>
            <div className={css.developertag}>
              Click here to view site on Heroku
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div>
      <img src="" className={css.footer} />
    </div>
  </div>
);

export default Oddjobs;
