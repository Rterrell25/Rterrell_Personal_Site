import Nav from "../components/nav";
import css from "./style/index.css";
// import Link from "next/link";
import { Link } from "react-scroll";

const Portfolio = props => {
  return (
    <div className={css.portfolio_body}>
      <div className={css.portfolio_head}>
        <Nav />
      </div>
      <div className={css.container}>
        <img
          src="../static/portfolio.jpg"
          className={css.about_image}
          alt="plumber"
        />
        <div className={css.textblock}>
          <div className={css.topblock}>
            <Link to="before" smooth={true} offset={50} duration={1500}>
              <div class={css.arrow}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <div id="before"></div>
      <div>
        <img
          src="https://i.imgur.com/elCLQtX.png"
          className={css.pose}
          id="mic"
          alt="pose"
        />
      </div>
      <div id="row" className={css.row}>
        <div className={css.column}>
          <div className={css.hovereffect}>
            <img
              className={css.imgresponsive}
              src="https://i.imgur.com/Tojgmv8.png"
              alt="Oddjobs"
            />

            <br />
            <a href="/oddjobs">
              <div className={css.overlay}>
                <h2 className={css.overlay_text}>Click For Details</h2>
              </div>
            </a>
          </div>
        </div>
        <div className={css.column}>
          <div className={css.hovereffect}>
            <img
              className={css.imgresponsive}
              src="https://i.imgur.com/j8GO18n.jpg"
              alt="Barhop"
            />

            <br />
            <a href="/barhop">
              <div className={css.overlay}>
                <h2 className={css.overlay_text}>Click For Details</h2>
              </div>
            </a>
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
};

export default Portfolio;
