import Style from "./index.module.css";

function index({ as, children, ...props }) {
  const Tag = as || "h1";

  return (
    <Tag {...props} className={Style.title}>
      {children}
    </Tag>
  );
}

export default index;
