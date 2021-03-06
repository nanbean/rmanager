module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "globals": {
        "document": true,
        "foo": true,
        "window": true,
        "fetch": true,
        "WebSocket": true,
        "FormData": true,
    },
    "rules": {
        "no-console": "off",
        "linebreak-style": "off",
        "no-tabs": "off",
        "no-underscore-dangle": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-indent": [2, "tab"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "comma-dangle": ["error", "never"],
        "jsx-quotes": ["error", "prefer-single"],
        "indent": [2, "tab"],
        "arrow-body-style": ["error", "as-needed"],
        "space-before-function-paren": ["error", "always"],
        "quote-props": ["error", "consistent-as-needed"],
        "react/jsx-indent-props": [2, "tab"],
        "jsx-a11y/href-no-hash": "off",
    }
};
