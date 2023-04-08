module.exports = {
  extends: ["next", "eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "react/no-unescaped-entities": "off",
    "react/no-array-index-key": "error",
    "no-console": "error",
    "no-unused-vars": "warning",
  },
};
