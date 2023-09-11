import styles from './Hamburger.module.scss'
import React, {forwardRef, HTMLAttributes} from "react";

type BaseProps = {
	isActive?: boolean
}

type HamburgerProps = BaseProps & HTMLAttributes<HTMLDivElement>

export const Hamburger = forwardRef<HTMLDivElement, HamburgerProps>((
	{ isActive, className, ...rest }, ref) => {
	return (
		<div className={[
			styles.hamburger,
			isActive ? styles.hamburger_active : '',
			className
		].join(' ')} ref={ref} {...rest} />
	);
});