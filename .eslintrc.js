module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'standard-with-typescript',
        'prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['eslint-plugin-prettier', 'jest'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'double'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prettier/prettier': ['off', { singleQuote: true }],
        '@typescript-eslint/no-unused-vars': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
};
