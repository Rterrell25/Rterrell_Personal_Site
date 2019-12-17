import Nav from "../components/nav";
import css from "./style/index.css";

const Oddjobs = props => (
  <div className={css.oddjobs_body}>
    <div className={css.oddjob_head}>
      <Nav />
    </div>
    <div className={css.container}>
      <img
        src="https://i.imgur.com/GOjpbaR.jpg"
        className={css.top}
        alt="oddjobs"
      />
      <div className={css.textblock}>
        <div className={css.topblock}>Oddjobs</div>
      </div>
    </div>
    <div className={css.oddjobs_image_div}>
      <img
        src="https://i.imgur.com/Tojgmv8.png"
        className={css.oddjobs_image}
        alt="oddjobs_image"
      />
    </div>
    <br />
    <div className={css.oddjobdevelopertag}>Oddjobs</div>
    <br />
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
            <div className={css.oddjobdevelopertag}>
              Click here to view Github repo
            </div>
            <div className={css.oddjobdevelopertag}>
              Click here to view site on Heroku
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div>
      <img
        src="https://i.imgur.com/tl5nB1q.png"
        className={css.footer}
        alt="footer"
      />
    </div>
  </div>
);

export default Oddjobs;
