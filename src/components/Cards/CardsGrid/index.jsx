import Style from "./index.module.css";

function index({ children }) {
  return <div className={Style.cardGrid}>{children}</div>;
}

export default index;
