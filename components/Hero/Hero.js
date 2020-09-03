import { styles } from "styled-system";

import style from "./hero.module.css";

export default function Hero(props) {
  return (
    <div className={style.hero}>
      <div className={style.hero_group}>
        <div className={style.title_container}>
          <span>INTRODUCING</span>
          <h1>{props.title}</h1>
          <p>
            Learn to take advantage of other people’s work to further your own
            cause.
          </p>
          <button className={style.btn}>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
