import Nav from "../components/nav";
import css from "./style/index.css";
import Link from "next/link";

const Portfolio = props => (
  <div className={css.portfolio_body}>
    <div className={css.portfolio_head}>
      <Nav />
    </div>
    <div className={css.container}>
      <img src="https://i.imgur.com/LxB07lP.jpg" className={css.about_image} />
      <div className={css.textblock}>
        <div className={css.topblock}>My Portfolio</div>
      </div>
    </div>

    <div>
      <img src="https://i.imgur.com/elCLQtX.png" className={css.pose} />
    </div>
    <div className={css.row}>
      <div className={css.column}>
        <div className={css.hovereffect}>
          <img
            className={css.imgresponsive}
            src="https://i.imgur.com/Tojgmv8.png"
            alt=""
          />

          <br />
          <Link href="/oddjobs">
            <div className={css.overlay}>
              <h2 className={css.overlay_text}>Click For Details</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className={css.column}>
        <div className={css.hovereffect}>
          <img
            className={css.imgresponsive}
            src="https://i.imgur.com/j8GO18n.jpg"
            alt=""
          />

          <br />
          <Link href="/barhop">
            <div className={css.overlay}>
              <h2 className={css.overlay_text}>Click For Details</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <br />

    <div>
      <img src="https://i.imgur.com/tl5nB1q.png" className={css.footer} />
    </div>
  </div>
);

export default Portfolio;
