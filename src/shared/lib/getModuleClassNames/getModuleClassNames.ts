type getModuleClassNamesResult = string[]

interface IClassNames {
	[className: string]: string
}

export function getModuleClassNames(
	classNames: string[] = [],
	styles: IClassNames
): getModuleClassNamesResult {
	
	const result = []

	for (let i = 0; i < classNames.length; i++) {
		result.push(styles[classNames[i]])
	}

	return result
}
