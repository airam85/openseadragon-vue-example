module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
     'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
    "vue/multi-word-component-names": ["error", {
        "ignores": ["Pixnormous","Stats","Settings","Project","Reports","Profile"]
        }],
    "vue/no-mutating-props": ["error", {
        "shallowOnly": true
        }]
    }
  }