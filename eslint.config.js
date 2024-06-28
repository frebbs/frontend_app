import importPlugin from 'eslint-plugin-import';
import unicornPlugin from 'eslint-plugin-unicorn';

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
		plugins: {
			import: importPlugin,
			unicorn: unicornPlugin
		},
		rules: {
			'semi': ['error', 'always'],
			'indent': ['error', 'tab'],
			"no-unused-vars": ["error", { "args": "after-used", "argsIgnorePattern": "^next$" }],
			'import/no-unused-modules': 'error',
			'unicorn/better-regex': 'error'
		}
	}
];
