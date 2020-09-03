import style from "./tip.module.css";

export default function Tip() {
  return (
    <div className={style.tip_container}>
      <div className={style.tip_grid}>
        <div className={style.left}>
          <p>Download our app to carry out at any cafe</p>
        </div>
        <div className={style.right}>
          <p>
            <strong>FREE</strong> USPS Shipping on Orders $20+
          </p>
        </div>
      </div>
    </div>
  );
}
