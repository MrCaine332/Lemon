import { useMemo, useState } from "react"
import { useEvent } from "@app/hooks/useEvent"

const defaultDeserialize = <Value>(v: string | null) => v as Value
const defaultSerialize = String
const defaultConverter = <Value>(v: string | null, key: string) => v as Value

function findOtherParams<Type>(
  keys: string[],
  newSearchParams: URLSearchParams
) {
  const prevSearchParams = new URLSearchParams(window.location.search)

  prevSearchParams.forEach((value, key) => {
    if (!keys.includes(key)) {
      newSearchParams.set(key, value)
    }
  })
}

function findAndRewriteParams<Type>(
  params: Type,
  newSearchParams: URLSearchParams,
  serialize: (value: any) => string
) {
  for (let key in params) {
    if (params[key]) newSearchParams.set(key, serialize(params[key]))
  }
}

interface UseQueryObjectStateOptions<Type> {
  defaultParams: Type
  serialize?: (value: any) => string
  deserialize?: (value: string | null) => Type[keyof Type]
  paramConverter?: (value: string | null, key: string) => any
}

export function useQueryObjectState<Type extends object>({
  defaultParams,
  serialize = defaultSerialize,
  deserialize = defaultDeserialize,
  paramConverter = defaultConverter,
}: UseQueryObjectStateOptions<Type>) {
  const keys = useMemo(() => {
    return Object.keys(defaultParams)
  }, [])

  const [value, setValue] = useState<Type>(() => {
    const search = window.location.search
    const prevSearchParams = new URLSearchParams(search)

    let actualInitialParams: Type = { ...defaultParams }

    prevSearchParams.forEach((value, key) => {
      if (keys.includes(key)) {
        const param = deserialize(value)

        // @ts-ignore
        const convertedParam = paramConverter(param, key)

        actualInitialParams[key as keyof Type] = convertedParam
      }
    })

    let newSearchParams = new URLSearchParams()

    findOtherParams(keys, newSearchParams)
    findAndRewriteParams(actualInitialParams, newSearchParams, serialize)

    const newSearch = newSearchParams.toString()

    history.pushState(null, "", `?${newSearch}`)

    return actualInitialParams
  })

  const updateValue = useEvent(
    (newValue: Type | ((prevValue: Type) => Type)) => {
      const actualNewValue = {
        ...defaultParams,
        ...(typeof newValue === "function" ? newValue(value) : newValue),
      }

      setValue(actualNewValue)

      let newSearchParams = new URLSearchParams()

      findOtherParams(keys, newSearchParams)
      findAndRewriteParams(actualNewValue, newSearchParams, serialize)

      const newSearch = newSearchParams.toString()

      history.pushState(null, "", `?${newSearch}`)
    }
  )

  return [value, updateValue] as const
}
