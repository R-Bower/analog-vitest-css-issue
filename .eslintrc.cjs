/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    es2022: true,
    jest: true,
    node: true,
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "**/*dist",
    "dist/**/*",
    "out",
    "out-tsc",
    ".ng-doc",
  ],
  overrides: [
    {
      extends: ["plugin:comment-length/recommended"],
      files: ["**/*.{tsx,jsx,ts,js,mjs,cjs,scss}"],
      rules: {
        "comment-length/limit-multi-line-comments": [
          "warn",
          {
            ignoreUrls: true,
            maxLength: 85,
          },
        ],
        "comment-length/limit-single-line-comments": [
          "warn",
          {
            ignoreUrls: true,
            maxLength: 85,
          },
        ],
      },
    },
    {
      extends: [
        "eslint-config-rbower-typescript/naming-convention",
        "eslint-config-rbower-typescript/recommended",
        "eslint-config-rbower-typescript/style-guide",
      ],
      files: ["**/*.{tsx,jsx,ts,js,mjs,cjs}"],
      rules: {
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              Function: false,
            },
          },
        ],
        "@typescript-eslint/no-extra-semi": "off",
        "no-case-declarations": "off",
        "no-invalid-this": "off",
        "no-prototype-builtins": "off",
      },
    },
    {
      files: ["**/*.{tsx,jsx,ts,js,mjs,cjs}"],
      rules: {
        "spaced-comment": [
          "error",
          "always",
          {
            exceptions: ["*"],
            markers: ["/"],
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
}
