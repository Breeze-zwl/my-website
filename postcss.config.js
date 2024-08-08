// postcss.config.js
export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // 这里可以根据设计稿的基准值设置
      unitPrecision: 5,
      propList: ['*'], // 允许转换的属性列表，'*' 表示所有属性
      selectorBlackList: [/^((?!postTorem).)*$/], // 要忽略的选择器
      replace: true,
      mediaQuery: false, // 是否在媒体查询中转换 `px`
      minPixelValue: 0, // 小于或等于 `minPixelValue` 的 px 不会被转换
    },
  },
};

