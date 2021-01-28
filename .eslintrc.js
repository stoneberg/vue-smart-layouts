module.exports = {
	root: true,
	env: {
		browser: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
	},
	extends: ['airbnb-base', 'plugin:vue/recommended', 'prettier/vue', 'plugin:prettier/recommended'],
	rules: {
		'vue/no-multiple-template-root': 0,
		'comma-dangle': 'off',
		'class-methods-use-this': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'implicit-arrow-linebreak': 'off',
		'import/prefer-default-export': 'off',
		'vue/component-name-in-template-casing': [
			'error',
			{
				ignores: [],
			},
		],
		'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
	},
};
