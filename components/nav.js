import Link from 'next/link'
import css from '../pages/style/index.css'


const Nav = props => (
  <nav>
    <div className={css.flex}>
      <Link href="/">
        <div>
          <div>Robert Terrell</div>
          <div>Full Stack Web Developer</div>
        </div>
      </Link>
      <div className={css.navbar}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link>
          <a>Portfolio</a>
        </Link>

        <Link>
          <a>Skills</a>
        </Link>
        <Link>
          <a>Contact</a>
        </Link>

      </div>
    </div>

  </nav>
)




export default Nav
