import Nav from "../components/nav";
import css from "./style/styles.css";

const About = props => (
  <div className={css.about_body}>
    <div className={css.head}>
      <Nav />
    </div>
    <div className={css.container}>
      <img src="https://i.imgur.com/nN2L4a2.jpg" className={css.about_image} />
      <div className={css.textblock}>
        <div className={css.topblock}>About Me</div>
      </div>
    </div>

    <div className={css.aboutpcontainer}>
      <div className={css.developerpara}>
        <p className={css.p2}>
          Front End Development: building out the visual components of a website
          using HTML5, CSS3, Javascript, and React.js. I build fast, interactive
          websites. Feel free to take a look at my latest projects on the
          portfolio page.
        </p>
      </div>
    </div>
  </div>
);

export default About;
