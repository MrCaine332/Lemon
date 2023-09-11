import React, {useState} from "react";
import {isFunction} from "webpack-merge/dist/utils";
import {useEvent} from "@app/hooks/useEvent";

class PersistentStorage {
	storage?: Storage

	constructor(type: "local" | "session") {
		try {
			this.storage = type === "local" ? localStorage : sessionStorage
		} catch (e) {
			console.log("Local storage is disabled")
		}
	}

	get(key: string): unknown {
		if (!this.storage)
			return

		try {
			const storageValue = this.storage.getItem(key)
			if (storageValue === null)
				return

			const value = JSON.parse(storageValue)
			return value
		} catch (e) {
			console.log(e)
			return
		}
	}

	set(key: string, value: unknown) {
		if (!this.storage)
			return

		try {
			const stringifiedValue = JSON.stringify(value)
			this.storage.setItem(key, stringifiedValue)
		} catch (e) {
			console.log(e)
			return
		}
	}

	has(key: string) {
		if (!this.storage)
			return

		return key in this.storage
	}

	remove(key: string) {
		if (!this.storage)
			return

		this.storage.removeItem(key)
	}
}

const localStorageWrapper = new PersistentStorage("local")

function createPersistentStateHooks(storage: PersistentStorage) {
	return function usePersistentState<Value>(
		name: string,
		initialValue: (() => Value) | Value,
	) {
		const [value, setValue] = useState(() => {
			if (storage.has(name)) {
				let value = storage.get(name) as Value

				return value
			}

			// @ts-ignore
			return isFunction(initialValue) ? initialValue() : initialValue
		})

		const setState = useEvent((newValue: React.SetStateAction<Value>) => {
			// @ts-ignore
			const actualNewValue = isFunction(newValue) ? newValue(value) : newValue

			storage.set(name, actualNewValue)

			setValue(actualNewValue)
		})

		const dispose = useEvent(() => {
			storage.remove(name)
		})

		return [value, setState, dispose] as const
	}
}

export const useLocalStorageState = createPersistentStateHooks(localStorageWrapper)