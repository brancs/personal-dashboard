import Style from "./index.module.css";

function index({ children }) {
  return <div className={Style.mainLayout}>{children}</div>;
}

export default index;
