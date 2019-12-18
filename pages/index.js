import Nav from "../components/nav";
import Head from "next/head";
import css from "./style/index.css";
import { Link } from "react-scroll";

const Home = props => (
  <div className={css.home_background}>
    <Head>
      <title>Robert Terrell</title>
    </Head>
    <div className={css.nav}>
      <Nav />
    </div>
    <div className={css.index_container}>
      <img src="../static/city.jpg" className={css.top} alt="top_city" />
      <div className={css.index_textblock}>
        <div className={css.topblock}>
          <Link to="wyncode_div" smooth={true} offset={50} duration={1500}>
            <div className={css.arrow}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      </div>

      <div>
        <img
          src="../static/down.jpg"
          className={css.topOne}
          alt="bottom_city"
        />
      </div>
    </div>
    <div className={css.flex_column}>
      <div className={css.wyncode_image_div} id="wyncode_div">
        <img
          src="https://i.imgur.com/N0cUlg7.png"
          className={css.wyncode_image}
          id="wyncode_image"
          alt="memoji"
        ></img>
      </div>
      <br />
      <div className={css.image_caption}>
        <div className={css.tag_line}>Not Your Average Web Developer</div>

        <div className={css.image_label}>
          "I've developed a passion for creating highly interactive web
          applications with clean, elegant, and efficient code."
        </div>
      </div>
    </div>

    <div>
      <img
        src="https://i.imgur.com/8LuqUzQ.png"
        className={css.pose}
        alt="pose"
      />
    </div>
    <div className={css.developertag}>What I can do.</div>

    <div className={css.aboutMeTwo}>
      <div className={css.aboutMeTwoP}>
        <div className={css.developerpara}>
          <div className={css.p2}>
            Front End Development: building out the visual components of a
            website using HTML5, CSS3, Javascript, and React.js. I build fast,
            interactive websites. Feel free to take a look at my latest projects
            on the portfolio page.
          </div>
          <br />
          <div>
            Backend Development: technologies that I have worked in are Ruby on
            Rails with a PostgreSQL database, expressJS with a mongodb database,
            and Apollo with Prisma and a MySQL database.
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className={css.footer}>Hey</div>
  </div>
);
export default Home;
