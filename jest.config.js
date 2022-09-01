module.exports = {
    preset: 'ts-jest',
    roots: [
        '<rootDir>/',
    ],
    testEnvironment: 'node',
    testMatch: [
        '**/*.(test|it).ts',
    ],
    verbose: true,
}

