import styled from "styled-components";
import style from "./box.module.css";

export default function Box() {
  return (
    <div className={style.box_container}>
      <div className={style.box_group}>
        <span>NEW ARRIVALS</span>
        <h1>Freshest of the Fresh</h1>
        <p>
          Featuring the freshest in our beautiful range of seasonal coffees
          sourced throughout the year.
        </p>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}
