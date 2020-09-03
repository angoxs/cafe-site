import style from "./insta.module.css";

export default function Insta() {
  return (
    <div className={style.insta_container}>
      <div className={style.insta_group}>
        <p>
          <strong>Sign up for our newsletter</strong> to receive special offers,
          event invitations, and more.
        </p>
        <p>JOIN NOW</p>
      </div>
    </div>
  );
}
