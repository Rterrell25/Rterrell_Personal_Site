import Link from 'next/link'
import css from '../pages/style/index.css'
import Head from 'next/head'


const Nav = props => (

  <nav>
    <Head>
      <title>Robert Terrell</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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
