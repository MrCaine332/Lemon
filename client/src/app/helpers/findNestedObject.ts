export function findNestedObj<T = any, R = any>(entireObj: T, keyToFind: string, valToFind: R) {
	let foundObj
	JSON.stringify(entireObj, (_, nestedValue) => {
		if (nestedValue && nestedValue[keyToFind] === valToFind) {
			foundObj = nestedValue;
		}
		return nestedValue
	})
	return foundObj
}