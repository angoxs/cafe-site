import style from "./show.module.css";

export default function Showcase() {
  return (
    <div className={style.show_container}>
      <div className={style.show_grid}>
        <div className={style.case}>
          <div className={style.case_group}>
            <img src="/basic8.png" />
            <p>SINGLE ORIGIN</p>
            <h2>Ethipia Raro</h2>
            <p>$19.00</p>
          </div>
        </div>
        <div className={style.secondcase}>
          <div className={style.case_group}>
            <img src="/basic9.png" />
            <p>SINGLE ORIGIN</p>
            <h2>Ethipia Raro</h2>
            <p>$19.00</p>
          </div>
        </div>
        <div className={style.thirdcase}>
          <div className={style.thirdcase_group}>
            <span>NEW ARRIVALS</span>
            <h1>Freshest of the Fresh</h1>
            <p>
              Featuring the freshest in our beautiful range of seasonal coffees
              sourced throughout the year.
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
