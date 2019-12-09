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
        <Link href="/about">
          <a className={css.about}>About</a>
        </Link>
        <Link href="/portfolio">
          <a className={css.portfolio}>Portfolio</a>
        </Link>

        <Link href="/skills">
          <a className={css.skills}>Skills</a>
        </Link>
        <Link hrf="/contact">
          <a className={css.contact}>Contact</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
