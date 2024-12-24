const selectorsPattern = "[a-z]+((\\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?";

module.exports = {
  extends: [
    "stylelint-scss",
    "stylelint-config-standard",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "selector-class-pattern": selectorsPattern,
    "custom-property-pattern": selectorsPattern,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "font-family-no-missing-generic-family-keyword": null,
    "no-invalid-double-slash-comments": null,
    "keyframes-name-pattern": selectorsPattern,
    "no-descending-specificity": null,
    "media-feature-range-notation": "prefix",
  },
};
