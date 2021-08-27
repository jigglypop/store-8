module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|gif)$': 'jest-transform-stub',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@client/(.*)$': '<rootDir>/client/$1',
    '^@components/(.*)$': '<rootDir>/client/components/$1',
    '@middle/(.*)$': '<rootDir>/middle/$1',
    '@api/(.*)$': '<rootDir>/client/api/$1',
    '@lib/(.*)$': '<rootDir>/client/lib/$1',
    '@pages/(.*)$': '<rootDir>/client/pages/$1',
    '@constants/(.*)$': '<rootDir>/client/constants/$1',
    '@store/(.*)$': '<rootDir>/client/store/$1',
    '@utils/(.*)$': '<rootDir>/client/utils/$1',
    '@font/(.*)$': '<rootDir>/public/font/$1',
    '^@image/.jpg': '<rootDir>/public/image/$1',
    '\\.svg': '<rootDir>/client/__mocks__/svgrMock.ts',
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  setupFilesAfterEnv: ['<rootDir>/client/setUpTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
