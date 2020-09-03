import { styles } from "styled-system";
import Fade from "react-reveal/Reveal";
import style from "./hero.module.css";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-scroll";

export default function Hero(props) {
  return (
    <div className={style.hero}>
      <div className={style.hero_group}>
        <div className={style.title_container}>
          <span>CAFINELI</span>
          <Reveal effect="fadeInUp" effectOut="fadeOutLeft">
            <h1>{props.title}</h1>
          </Reveal>

          <Fade up>
            <p>
              We love making new connections, friendships, & relantionships & we
              might be a little biased, but we thing the best ones start with
              with coffee!
            </p>
          </Fade>

          <Fade up>
            <Link to="learnmore">
              <button className={style.btn}>LEARN MORE</button>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}
