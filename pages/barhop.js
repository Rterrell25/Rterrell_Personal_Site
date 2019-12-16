import Nav from "../components/nav";
import css from "./style/index.css";

const Barhop = props => (
  <div className={css.barhop_body}>
    <div className={css.barhop_head}>
      <Nav />
    </div>
    <div className={css.container}>
      <img src="https://i.imgur.com/jJAAi0g.jpg" className={css.top} />
      <div className={css.textblock}>
        <div className={css.topblock}>BarHop</div>
      </div>
    </div>
    <br />
    <div className={css.oddjobs_image_div}>
      <img
        src="https://i.imgur.com/j8GO18n.jpg"
        className={css.oddjobs_image}
      />
    </div>
    <br />
    <div className={css.developertag}>BarHop</div>
    <br />
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
      <img src="https://i.imgur.com/tl5nB1q.png" className={css.footer} />
    </div>
  </div>
);

export default Barhop;
