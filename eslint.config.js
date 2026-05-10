module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        module: "readonly",
        require: "readonly",
        describe: "readonly",
        it: "readonly",
        chai: "readonly"
      }
    },
    rules: {
      "no-cond-assign": ["error", "always"],
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "no-unused-vars": "off",
      "semi": ["error", "always"]
    }
  }
];
