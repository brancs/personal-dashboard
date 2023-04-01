import Style from "./index.module.css";

function index({ title, children }) {
  return (
    <div className={Style.card}>
      <h2 className={Style.cardTitle}>{title}</h2>
      <div className={Style.cardBody}>{children}</div>
    </div>
  );
}

export default index;
