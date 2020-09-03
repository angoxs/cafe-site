import style from "./show.module.css";
import Fade from "react-reveal/Fade";

export default function Showcase() {
  return (
    <div className={style.show_container}>
      <div className={style.show_grid}>
        <Fade left>
          <div className={style.case}>
            <div className={style.case_group}>
              <p>CAFINELI</p>
              <h2>Ethipia Raro</h2>
              <p>$19.00</p>
            </div>
          </div>
        </Fade>

        <Fade bottom up>
          <div className={style.secondcase}>
            <div className={style.case_group}>
              <p>CAFINELI</p>
              <h2>Ethipia Halo Hartume</h2>
              <p>$19.00</p>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className={style.thirdcase}>
            <div className={style.thirdcase_group}>
              <span>NEW ARRIVALS</span>
              <h1>Freshest of the Fresh</h1>
              <p>
                Featuring the freshest in our beautiful range of seasonal
                coffees sourced throughout the year.
              </p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
