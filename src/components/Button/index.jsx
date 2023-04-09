import Style from "./index.module.css";

function index({ as, children, ...props }) {
  const Tag = as || "button";

  return (
    <Tag {...props} className={Style.button}>
      {children}
    </Tag>
  );
}

export default index;
