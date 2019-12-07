import Link from 'next/link'

const Home = props => (
    <div>
        <Link href="/bio">
            <a>Bio</a>
        </Link>
        <p>Home Page</p>
    </div>
)
export default Home;