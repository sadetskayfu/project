export type BuildMode = 'production' | 'development'

export interface BuildPaths {
	html: string
	output: string
	entry: string
	src: string
	classNames: string // custom classnames helper
	moduleClassNames: string // custom module css helper
}

export interface BuildEnv {
	mode: BuildMode
	port: number
}

export interface BuildOptions {
	mode: BuildMode
	paths: BuildPaths
	isDev: boolean
	port: number
}
