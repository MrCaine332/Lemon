import styles from "./Dropdown.module.scss"
import React, { MouseEvent, useRef, useState } from "react"
import { useWindowEvent } from "@app/hooks/useWindowEvent"
import { Section } from "@components/ui/section"

type BaseProps = {
  children: [JSX.Element, React.ReactNode]
  wrapperClassName?: string
  dropdownClassName?: string
  onToggleCallback?: (isOpened: boolean) => void
  forceIsOpened?: boolean
}

type DropdownProps = BaseProps

export const Dropdown = ({
  children,
  wrapperClassName,
  dropdownClassName,
  onToggleCallback,
  forceIsOpened,
}: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useWindowEvent("click", (event) => {
    if (!ref.current?.contains(event.target as Node)) {
      if (forceIsOpened === undefined) setIsOpened(false)
      onToggleCallback?.(false)
    }
  })

  const buttonElement = React.cloneElement(children[0], {
    ...children[0].props,
    onClick: (event: MouseEvent) => {
      children[0].props.onClick?.(event)
      const newIsOpened =
        forceIsOpened === undefined ? !isOpened : !forceIsOpened
      if (forceIsOpened === undefined) setIsOpened(newIsOpened)
      onToggleCallback?.(newIsOpened)
    },
  })

  return (
    <div
      className={[styles.dropdownWrap, wrapperClassName].join(" ")}
      ref={ref}
    >
      {buttonElement}
      <Section
        className={[
          styles.dropdown,
          forceIsOpened === undefined
            ? isOpened
              ? styles.dropdown_show
              : ""
            : forceIsOpened
              ? styles.dropdown_show
              : "",
          dropdownClassName,
        ].join(" ")}
      >
        {children[1]}
      </Section>
    </div>
  )
}
