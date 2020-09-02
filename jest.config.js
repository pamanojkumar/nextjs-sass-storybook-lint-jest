module.exports = {
  testMatch: [
    '**/?(*.)+(test).js?(x)',
  ],
  moduleFileExtensions: [
    'js',
    'scss'
  ],
  moduleNameMapper: {
   // "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.(css|scss)$": "identity-obj-proxy" // to run css modules in testcases
  },
  collectCoverageFrom: [
    'src/**/*.js',
    'pages/**/*.js',
    '!/(styles)/**',
    '!**/(stories)/**',
    '!**/node_modules/**',
    '!**/tests/**',
    '!/coverage/**',
    '!/.storybook/**',
    '!/.next/**',
    '!/dev-docs/**',
    '!/public/**',
    '!/pages/_app.js',
    '!jest.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  setupFiles: [
    './jest/jest.setup.js'
  ],
  testPathIgnorePatterns: ['./.next/','./.storybook/','./node_modules/']
}