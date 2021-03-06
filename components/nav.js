import Link from "next/link";
import css from "../pages/style/index.css";

const Nav = props => (
  <nav>
    <div className={css.flex}>
      <Link href="/">
        <div className={css.navbar_left}>
          <div className={css.full_name}>Robert Terrell</div>
          <div>Full-Stack Web Developer</div>
        </div>
      </Link>
      <div className={css.navbar_right}>
        <Link href="/">
          <a className={css.about}>Home</a>
        </Link>
        <Link href="/about">
          <a className={css.about}>About</a>
        </Link>
        <Link href="portfolio">
          <a className={css.portfolio}>Portfolio</a>
        </Link>

        <a
          href="https://docs.google.com/document/d/1AWbR3JS3uA0MDuuRsILJWJMgCVEeslff/export?format=pdf"
          className={css.skills}
        >
          Resume
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
