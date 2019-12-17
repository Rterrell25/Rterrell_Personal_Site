import Nav from "../components/nav";
import Head from "next/head";
import css from "./style/index.css";

const Home = props => (
  <div className={css.home_background}>
    <Head>
      <title>Robert Terrell</title>
    </Head>
    <div className={css.nav}>
      <Nav />
    </div>
    <div className={css.container}>
      <img
        src="https://i.imgur.com/Ih4R4t8.jpg"
        className={css.top}
        alt="top_city"
      />
      <div className={css.textblock}>
        <div className={css.topblock}>I'm Robert Terrell</div>
        <div className={css.bottomblock}>A Full Stack Web Developer</div>
      </div>
      <div>
        <img
          src="https://i.imgur.com/UxzRIrg.jpg"
          className={css.topOne}
          alt="bottom_city"
        />
      </div>
    </div>
    <div className={css.flex_column}>
      <div className={css.wyncode_image_div}>
        <img
          src="https://i.imgur.com/N0cUlg7.png"
          className={css.wyncode_image}
          alt="memoji"
        ></img>
      </div>
      <br />
      <div className={css.image_caption}>
        <div className={css.tag_line}>Not Your Average Web Developer</div>
        <br />
        <div className={css.image_label}>
          "I've developed a passion for creating highly interactive web
        </div>
        <div className={css.image_label_two}>
          {" "}
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
    <br />
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
    <div>
      <img
        src="https://i.imgur.com/tl5nB1q.png"
        className={css.footer}
        alt="footer"
      />
    </div>
  </div>
);
export default Home;
