import {useState} from "react";
import {useEvent} from "@app/hooks/useEvent";

function getSearchParam(search: string, param: string) {
	const searchParam = new URLSearchParams(search)
	return searchParam.get(param)
}

function setSearchParam(search: string, param: string, value: string) {
	const searchParam = new URLSearchParams(search)
	searchParam.set(param, value)
	return searchParam.toString()
}

const defaultDeserialize = <Value>(v: string | null) => v as Value
const defaultSerialize = String

interface UseQueryParamsStateOptions<Value> {
	name: string
	defaultValue?: Value | null
	serialize?: (value: Value) => string
	deserialize?: (value: string | null) => Value
}

export function useQueryParamState<Value>({
	name,
	defaultValue = null,
	serialize = defaultSerialize,
	deserialize = defaultDeserialize
}: UseQueryParamsStateOptions<Value>) {

	const [value, setValue] = useState(() => {
		const initialValue = deserialize(getSearchParam(location.search, name))

		if (initialValue)
			return initialValue

		if (defaultValue) {
			const search = window.location.search

			const newSearch = setSearchParam(search, name, serialize(defaultValue))

			history.pushState(null, "", `?${newSearch}`)
		}

		return defaultValue
	})

	const updateValue = useEvent((newValue) => {
		const search = window.location.search
		const actualNewValue = typeof newValue === "function" ? newValue() : newValue

		setValue(actualNewValue)

		const newSearch = setSearchParam(search, name, serialize(actualNewValue))

		history.pushState(null, "", `?${newSearch}`)
	})

	return [value, updateValue] as const
}
