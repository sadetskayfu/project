import type { Config } from 'jest'
/** @type {import('ts-jest').JestConfigWithTsJest} **/

const config: Config = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}], // ts => js
	},
	rootDir: '../../',
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src/'], // for absolute import
	moduleNameMapper: {
    // for absolute imports with alias
		'^@/(.*)$': '<rootDir>src/$1', 

    // Name export css module
		'\\.s?css$': '<rootDir>config/jest/identity-obj-proxy.ts', 

    // Default export css module / Не показывает название классов при именовоном экспорте css модулей.
		// '\\.s?css$': 'identity-obj-proxy', 
	},
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
}

export default config
