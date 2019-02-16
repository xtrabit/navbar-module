module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": ['jsx-a11y'],
  "rules": {
    "object-curly-spacing": "off",
    'react/prop-types': 'off',
    'comma-dangle': 'off'
  },
  "globals": {"fetch": false},
  "env": {
    "browser": true,
    "node": true
  }
};