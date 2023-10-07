/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<TYPES>^(react/(.*)$)|^(react$)",
    "<TYPES>^(@remix-run/(.*)$)|^(@remix-run$)",
    "<TYPES>",
    "",
    "^(react/(.*)$)|^(react$)",
    "^(@remix-run/(.*)$)|^(@remix-run$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "<TYPES>^[~]",
    "<TYPES>^[.]",
    "",
    "^[~]",
    "^[.]",
  ],
};
