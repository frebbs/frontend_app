export default [
	{
		files: ['**/*.js'],
		ignores: ['node_modules/**', '.git/**', 'public/js/bundle.js'],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			globals: {
				browser: true,
				es2021: true,
				node: true
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		rules: {
			'semi': ['error', 'always'],
			'indent': ['error', 'tab'],
			"no-unused-vars": ["error", { "args": "after-used", "argsIgnorePattern": "^next$" }]
		}
	}
];
