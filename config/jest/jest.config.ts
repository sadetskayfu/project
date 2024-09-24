import type { Config } from 'jest'
import path from 'path'
/** @type {import('ts-jest').JestConfigWithTsJest} **/

const config: Config = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}], // ts => js
	},
	globals: {
		__IS_DEV__: true,
	},
	rootDir: '../../',
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src/'], // for absolute import
	moduleNameMapper: {
		// for absolute imports with alias
		'^@/(.*)$': '<rootDir>src/$1',

		// Name export css module
		'\\.s?css$': path.resolve(__dirname, 'identity-obj-proxy.ts'),
		
		// svg mock
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),

		// Default export css module / Не показывает название классов при именовоном экспорте css модулей.
		// '\\.s?css$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],
}

export default config
