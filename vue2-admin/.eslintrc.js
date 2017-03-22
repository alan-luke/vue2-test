// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-extra-parens": 1, //禁止非必要的括号
    "no-extra-semi": 1, //禁止多余的冒号
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }], //对象字面量中冒号的前后空格
    "comma-spacing": [1, { "before": false, "after": true }],
    "no-new": 1, //禁止在使用new构造一个实例后不赋值
    "no-redeclare": 2, //禁止重复声明变量
    "no-trailing-spaces": 1, //一行结束后面不要有空格
    "no-use-before-define": 2, //未定义前不能使用
    "no-cond-assign": [1, "always"], //if, while等条件中不允许使用“=”
    "no-constant-condition": 1, //禁止在条件中使用常量表达式 if(true) if(1)
    'no-debugger': 1, // 程序中不能出现debugger
    // "no-console": 1, //程序中不能出现
    "no-dupe-args": 2, // 函数的参数名称不能重复
    "no-func-assign": 2, //禁止重复的函数声明
    "no-dupe-keys": 2, // 对象的属性名称不能重复
    "no-duplicate-case": 2, // switch的case不能重复
    "no-empty": 1, //代码块的内容不能为空，禁止空代码块
    "no-eq-null": 2, //禁止对null使用==或!=运算符
    "no-eval": 1, //禁止使用eval
    "no-multiple-empty-lines": [1, { "max": 2 }], //空行最多不能超过2行
    "indent": [1, 2], //缩进风格
    "space-before-blocks": [1, "always"], //规定了在代码块前是否需要加空格
    "space-before-function-paren": [1, "always"], //函数定义时，function关键字后面的小括号前是否需要加空格
    "space-in-parens": [1, "never"], //规定圆括号内部的空格。规定是否需要在(右边，或者)左边加空格。
  }
}
