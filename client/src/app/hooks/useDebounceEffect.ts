import {DependencyList, useCallback, useEffect} from "react";

export function useDebounceEffect(effect: any, dependencies: DependencyList, delay: number,) {
	const callback = useCallback(effect, dependencies);

	useEffect(() => {
		const timeoutId = setTimeout(callback, delay)
		return () => clearTimeout(timeoutId)
	}, [callback, delay]);
}