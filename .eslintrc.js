module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    '@react-native-community',
    'universe/native',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  parserOptions: {
    projectService: true,
    __tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    'jest/globals': true,
  },
  ignorePatterns: ['dist/', 'node_modules/', '**/*.js'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        typescript: './tsconfig.json',
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    semi: ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'react-native', group: 'external', position: 'before' },
          { pattern: 'react-native/**', group: 'external', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        distinctGroup: false,
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    '@typescript-eslint/no-require-imports': [
      'error',
      {
        allow: ['\\.png$', '\\.jpg$', '\\.jpeg$', '\\.gif$', '\\.svg$'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
    ],
    'import/no-default-export': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react/jsx-handler-names': [
      'error',
      {
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    'react/hook-use-state': ['error', { allowDestructuredState: false }],
  },
  overrides: [
    {
      files: ['./App.tsx', '*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
