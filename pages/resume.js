import css from "./style/index.css";
import Nav from "../components/nav";

const Resume = props => (
  <div className={css.resume_body}>
    <div className={css.resume_head}>
      <Nav />
    </div>
    <img src="https://i.imgur.com/HLw94HD.png" className={css.resume} />
  </div>
);

export default Resume;
