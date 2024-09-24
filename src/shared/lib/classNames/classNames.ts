type Mods = Record<string, string | boolean>

export function classNames(
	mainClass: string,
	additionalClasses: string[] = [],
	mods: Mods = {}
) {
	return [
		...[mainClass?.length > 0 && mainClass.trim()].filter(Boolean),
		...additionalClasses.filter(Boolean),
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ')
}
