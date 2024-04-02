import styles from "./Checkbox.module.scss"
import { InputHTMLAttributes } from "react"

type BaseProps = {
  label?: string
  wrapperClassName?: string
  className?: string
  labelClassName?: string
}

type CheckboxProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "type">

export const Checkbox = ({
  label,
  id,
  wrapperClassName,
  labelClassName,
  className,
  ...rest
}: CheckboxProps) => {
  return (
    <div className={[styles.checkboxWrapper].join(" ")}>
      <input
        type={"checkbox"}
        id={id}
        className={[styles.checkbox, className].join(" ")}
        {...rest}
      />
      <label
        className={["textButton", styles.checkboxLabel, labelClassName].join(
          " "
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
