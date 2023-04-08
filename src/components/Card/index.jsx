import Style from "./index.module.css";

function index({ title, children, style, bodyStyle }) {
  return (
    <div className={Style.card} style={style}>
      <h2 className={Style.cardTitle}>{title}</h2>
      <div className={Style.cardBody} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}

export default index;
