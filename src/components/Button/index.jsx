import Style from "./index.module.css";

function index({
  as,
  children,
  roundStart,
  roundEnd,
  variant = "primary",
  ...props
}) {
  const Tag = as || "button";

  return (
    <Tag
      {...props}
      className={`${Style.button} ${Style[variant]} ${
        roundStart && Style.roundStart
      } ${roundEnd && Style.roundEnd}`}
    >
      {children}
    </Tag>
  );
}

export default index;
