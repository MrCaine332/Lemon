import { AxiosError } from "axios"

export const mapApiErrors = <T = unknown>(
  err: unknown,
  defaultErrorMessage: string = "Default error message"
): T => {
  const mappedErrors: { [key: string]: string } = {}

  if (err instanceof AxiosError && err.response?.data.errors) {
    const errors = err.response?.data.errors
    for (let errorsKey in errors) {
      mappedErrors[errorsKey as string] = errors[errorsKey].msg
    }
  } else {
    mappedErrors.default = defaultErrorMessage
  }

  return mappedErrors as T
}