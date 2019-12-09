import Nav from "../components/nav";
import Head from "next/head";
import css from "./style/index.css";

const Home = props => (
  <div>
    <Head>
      <title>Robert Terrell</title>
    </Head>
    <Nav />
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
          I've developed a passion for creating highly interactive web
        </div>
        <div className={css.image_label_two}>
          {" "}
          applications with clean, elegant, and efficient code.
        </div>
      </div>
      <br />
      <br />
      <div className={css.image_grid}>
        <div>
          <img
            src="https://lh3.googleusercontent.com/OIViN9B7jdZP_Lgz-gC1v5rjJQKTh34Efrz_QNy7TSwpFxwApRXK8cUWj1wU3Qs45hUNE57QuyFIAOUkGsweWQSli16iFcYSPH_lSpwuruasC_DayamZ6YvJKraD10BGoCCw315b_iUwD3k7bCh9XqvgLn8cQWa6lBlxBxQTotGZF7tFCZc-de3xurGTMgxNYrFivAk5IZxWuNNzGHpEOGAuwikKd-yjtYjMoxFdP_pX5nywVcE2XsKfgLSEXjquqpEyM9g7mrXIbMXvJk2FIS5nA2T3Rlj04KOnUbIQgjr6kvctCWCiDjjUriilI0ginKCbpU4IG9NkEadX-lyusQjgp2c_HvXsy5kleRNIztei8TiRoAJWDzTYbIedEhQNIejwtXNdzwIrGLwF_nY1EjcAeAW_CIbQBwYMQz4l3UHIlj-P1VC8PLK0_ehl46wltg1tAnFzQjtXcejEXV2f95JgIf75atfFY1VkwdBEABvtRU1Q96NQ2NEy8u9gdX9lihCXKKfmfgmsOaZ_uwt0_kNNr7_VyjRYX8gM3qunUUYU_WsTWu-dnF8A4T40Fkwy_GPs1aCNxyKlnpt0JWpnxkp8Tmenh48jnqHroSRWJVh9vuEjGfnqcgVjRENnTl2EQwdEJictQPFvITi7KGwE_QM519XFk_Ac50rZxKM7Q6h58eNIiU6ijQ=w2524-h1576-no"
            className={css.oddjobs_image}
          />
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/DCXguoVCqDTOSjq6bs5IKdON7WGeiIUel_Qwe55QyxyKUOWPheriwYuSa6aBtFlXyVf3AEwwHwI8JOYLLce_peHGOJV3JlPfJY3pbFH9-R6AAUGUQvGhEhod-hGDf5WktLwnxLj6hSFvf9zisnfdB7CXtsL0x_1T3CEMZsOj1H7pRC62KtzDBEvQHbegoS0eiUNc-js0Xxwf0ByzG6whrBv4D0ppgH34miu12jz_YN2MSRhfnTmrsTtE0utOd1cO1GiTJwB_wwowXFmvkZ9lc9JcvbTE6FLSejbin8znggbdupi4TD0URaAATmVKldZO27p2xjhgiiFaNIFQRxFaoM-Ux7W7dqT5e6_Ale01ldMqLUTdRvVVA8EJLTQEb8tUFLk43VitKAGHSQMu6m-XmMLoPa_AyHPteXkQkvl-lIDv0UPU_HnYlsq659G78tLFKHY-9I3pocFzztvD-mJMXCMYE0h7XV3-VskFYGjXTS9Zi13F3yDGs3WMk977iKWv1mKvjN8mlhn3JyU5qfskgw_a-Lne-bcZnvzbV44aLkzIBSeWT67nNBMEPffRJp8hodH2G7gxgmz7CcXCUuNWqDstScPinD2ia8A2_QVN2OZHp07mDv0TV3FtGdrGGHaugA7u3BR66CK2YMsIAmP5M2U0ah15xd60Rr_abdLXBfNvDcGg8Z0UPQ=w2522-h1576-no"
            className={css.oddjobs_image}
          />
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/8a5yrUe8ZQzxr9CXxExMoBXulqlIYJyC6BxP9m8iz6SeqyOuiyCAQqxbqWb3uOxIwSWsZ6XIFQiuBA9Abo0cmv0WlgQcRPFE3_ivCvc9WHyjxvRHIb1-vgE-ZMQiCW8InDCHNDz-8w2uUH_xRgXAwIGeTufYYSKMGStZyPULQh8oWWAode13WMn_8W3aXWMllOxfw6CW6IcI2lXMMNyAexJzc08pvO_YitXJniKBqlN-bggC9jKIWXCZHY8suB1jAE2Cfia3AWobnp0cEIjGCjM9To-rmClNUM8tug7T9PGZlK9FJApDYj-azu068jAb5K4hD0IA05tuwixra0VjDIqzPZjWtncaC68qTQqDt9q0OoguoDlx_mufFRqk4syBwMAvolN2dkg95r5ovgIVVynObzJT0CmhWdeuIO-0kFqwmpe0kz1eAr4Oyuvs8x6lSAvad_WLuQWpGM61yagmtHa8c6Z0BkSUpMh0WivQZaPC0NuebUpqnPTrUXlpW1w9AbInFwqVOx-G2IhubnIEF1tOdos8yePKXb4U9D0kUFuXZwVGVd4hZmOmdD2a1rp5ujOSxZKp3pZV79hxlL2y178kOOlMQK7id6SQ9EvX32a2f9oQ1L9ZGHa250Bgx1iwCRRmSrS8QXjey0Ix6KwavwULv2wuD0uRulfsiejB4O1YCrW13P8hNQ=w2522-h1576-no"
            className={css.oddjobs_image}
          />
        </div>
      </div>
    </div>
  </div>
);
export default Home;
