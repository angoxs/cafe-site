import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_grid}>
        <p>CAFINELI</p>
        <div className={style.footer_group}>
          <p>
            <strong>Platform</strong>
          </p>

          <p>Help Center</p>
          <p>Security</p>
        </div>
        <div className={style.footer_group}>
          <p>
            <strong>Customers</strong>
          </p>

          <p>Use Cases</p>
          <p>Customer Stories</p>
        </div>
        <div className={style.footer_group}>
          <p>
            <strong>Company</strong>
          </p>

          <p>About</p>
          <p>
            {" "}
            Careers <span>- We're hiring!</span>
          </p>
        </div>
        <button>
          <a href="https://twitter.com/angelVZUR">Apply</a>
        </button>
      </div>
    </div>
  );
}
