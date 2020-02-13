module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "ie": "9"
        },
        "useBuiltIns": "usage"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "babel-plugin-idx"
    ],
    [
      "babel-plugin-console"
    ],
    [
      "babel-plugin-macros"
    ],
    require("./yournameof")
  ]
}