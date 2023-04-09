import Style from "./index.module.css";
import Header from "./Header";

function index({ children }) {
  return (
    <>
      <Header />
      <main className={Style.mainLayout}>{children}</main>
    </>
  );
}

export default index;
