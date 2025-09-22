import js from '@eslint/js';
import ts from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...ts.configs.strict,
    ...ts.configs.stylistic,
    {
        rules: {
            'no-console': 'error', // Disallow console logs in production code
            'no-unused-vars': 'error', // No unused variables
            '@typescript-eslint/no-explicit-any': 'error', // No 'any' types
            '@typescript-eslint/explicit-function-return-type': 'warn', // Require return types
            '@typescript-eslint/consistent-type-imports': 'error', // Consistent imports
            'prefer-const': 'error', // Prefer const over let
            'eqeqeq': ['error', 'always'], // Require === and !==
            'curly': ['error', 'all'], // Require curly braces for all control statements
            'no-debugger': 'error', // Disallow debugger
            '@typescript-eslint/no-unused-expressions': 'error' // No unused expressions
        }
    }
];