import Nav from "../components/nav";
import Head from "next/head";
import css from "./style/index.css";
import Link from "next/link";

const Home = props => (
  <div>
    <Head>
      <title>Robert Terrell</title>
    </Head>
    <Nav />

    <div class={css.container}>
      <img src="https://i.imgur.com/NTyoCNM.jpg" className={css.top} />
      <div className={css.textblock}>
        <div className={css.topblock}>I'm Robert Terrell</div>
        <div className={css.bottomblock}>A Full Stack Web Developer</div>
      </div>
    </div>
    <div className={css.flex_column}>
      <div className={css.wyncode_image_div}>
        <img
          src="https://lh3.googleusercontent.com/PK8xG5NQJm1eLD_n9Wv-mNhIcoN49QLZ6XQTTzvDbMEhK3Sj9botCGBvy0vPEnQxL8UEaDD_UeINyykpbLU-jxR7K8_YAqLX7lWM1s5ABDDsv7gRkgjYWMA6wRzJaVhwpsMQb4Zo7bGCJBAuxZvkl6gt0j_VjXu4X7WAJrIbSfieAIERaHxyfwFjnGafFoZawDKX10KvQLpjBg6Jc_POhDtyxFyp_7Os8jUqY4rydavSeCboV2CCCo4kmVvHUzGAQ_PAeRThEXNS3jnsXNhSNoJuoh2rNeY6GDZj6Q522JgjxyLQAdl08RNQR_vZwd7PAvptvteFnhAKX6tbVE_3Tg56C3P8WwSPN6IutMkoAiUNnIw4kcwjW7zD0gMYUlnwyjj2fue6QRXyM2B2aobSjPOyl6ZZ7JWQbRfpfz9puvYY74un0BXMzXazLVmx4SaUGc_QhzIaGcKWVT3zJWVBbR6hI3IdvYQOUJSyj-TYaNYbHR8RFENNH7kODR5J8gmRq1JONfxdWIJUSx08cSL5aXsFwuVSremRvsnioCpCzQRM2hK2VCzHWOJF-rne2g1ulcpV7B2AHopNAlUCJs8eJAAl9WyOQBppyTO-j7nMhAjRErGp9_jO6qvCFaN03X9K_lNPU73jburU92oyxE5RWU0TXMDAL-YYxs2h09C49jqWMSAYLyp2zVqxbigglJ-fZrUAi9HZTRvyy24mII2rFQ7tq7d54sIqXjvWzWiYwIe7544=w1516-h1576-no"
          className={css.wyncode_image}
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
        <div>
          <img src="" />
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className={css.row}>
      <div className={css.column}>
        <div>
          <Link href="/oddjobs">
            <div className={css.hovereffect}>
              <img
                className={css.imgresponsive}
                src="https://i.imgur.com/Tojgmv8.png"
                alt=""
              />

              <div className={css.overlay}>
                <h2>Click For Details</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={css.column}>
        <div>
          <Link href="/barhop">
            <div className={css.hovereffect}>
              <img
                className={css.imgresponsive}
                src="https://i.imgur.com/j8GO18n.jpg"
                alt=""
              />

              <div className={css.overlay}>
                <h2>Click For Details</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={css.column}>
        <div>
          <Link href="/todo">
            <div className={css.hovereffect}>
              <img
                className={css.imgresponsive}
                src="https://i.imgur.com/muz1gcq.png"
                alt=""
              />

              <div className={css.overlay}>
                <h2>Click For Details</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <br />
    <div className={css.footer}>
      <p>This is the footer</p>
    </div>
  </div>
);
export default Home;
