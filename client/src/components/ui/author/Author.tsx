import styles from './Author.module.scss'
import React from "react";

type AuthorProps = {
	author: string,
	className?: string
}

export const Author = ({ author, className }: AuthorProps) => {
	return (
		<div className={[styles.author, className].join(' ')}>
			<p className={'textBody'}>by <b>{author}</b></p>
		</div>
	);
};