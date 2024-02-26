module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "react/jsx-indent": [2,4],
    "react/jsx-indent-props": [2,4],
    "indent": "off",
    "@typescript-eslint/indent": "error",
    "react/jsx-filename-extension": [2, {extensions: ['.js', '.ts', '.tsx']}],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/no-deprecated": "off",
    "import/extensions": "off"
  },
};
