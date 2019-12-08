import Nav from '../components/nav'
import Head from 'next/head'
import css from './style/index.css'


const Home = props => (
  <div>
    <Head>
      <title>Robert Terrell</title>
    </Head>
    <Nav />
    <div className={css.wyncode_image_div}>
      <img src='https://lh3.googleusercontent.com/PK8xG5NQJm1eLD_n9Wv-mNhIcoN49QLZ6XQTTzvDbMEhK3Sj9botCGBvy0vPEnQxL8UEaDD_UeINyykpbLU-jxR7K8_YAqLX7lWM1s5ABDDsv7gRkgjYWMA6wRzJaVhwpsMQb4Zo7bGCJBAuxZvkl6gt0j_VjXu4X7WAJrIbSfieAIERaHxyfwFjnGafFoZawDKX10KvQLpjBg6Jc_POhDtyxFyp_7Os8jUqY4rydavSeCboV2CCCo4kmVvHUzGAQ_PAeRThEXNS3jnsXNhSNoJuoh2rNeY6GDZj6Q522JgjxyLQAdl08RNQR_vZwd7PAvptvteFnhAKX6tbVE_3Tg56C3P8WwSPN6IutMkoAiUNnIw4kcwjW7zD0gMYUlnwyjj2fue6QRXyM2B2aobSjPOyl6ZZ7JWQbRfpfz9puvYY74un0BXMzXazLVmx4SaUGc_QhzIaGcKWVT3zJWVBbR6hI3IdvYQOUJSyj-TYaNYbHR8RFENNH7kODR5J8gmRq1JONfxdWIJUSx08cSL5aXsFwuVSremRvsnioCpCzQRM2hK2VCzHWOJF-rne2g1ulcpV7B2AHopNAlUCJs8eJAAl9WyOQBppyTO-j7nMhAjRErGp9_jO6qvCFaN03X9K_lNPU73jburU92oyxE5RWU0TXMDAL-YYxs2h09C49jqWMSAYLyp2zVqxbigglJ-fZrUAi9HZTRvyy24mII2rFQ7tq7d54sIqXjvWzWiYwIe7544=w1516-h1576-no' className={css.wyncode_image}></img>
    </div>
  </div>

)
export default Home;