module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/$1',
    },
  };
  