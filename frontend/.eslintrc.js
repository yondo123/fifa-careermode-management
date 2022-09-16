//.eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', //콘솔 사용 제한
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off' //디버거 사용 제한
    }
};
