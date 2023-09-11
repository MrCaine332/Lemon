import styles from './Divider.module.scss'
import {HTMLAttributes} from "react";

type BaseProps = {
	className?: string
}

type DividerProps = BaseProps & HTMLAttributes<HTMLHRElement>

export const Divider = ({ className }: DividerProps) => {
	return (
		<hr className={[styles.divider, className].join(' ')}/>
	);
};