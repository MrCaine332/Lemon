import {Section} from "@components/ui/section";
import React, {MouseEvent, useRef, useState} from "react";
import {useWindowEvent} from "@app/hooks/useWindowEvent";
import {Button} from "@components/ui/button";
import styles from './Select.module.scss'
import {Divider} from "@components/ui/divider";
import Icons from "@components/ui/icons";

export type Option = {
	value: string | number
	name: string
	children?: Option[]
}


type OptionProps = {
	option: Option
	index: number,
	onOptionClick: (option: Option) => void
}


const Option = ({ option, index, onOptionClick }: OptionProps) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<>
			{ index > 0 ? <Divider className={styles.optionDivider} /> : null }
				{
				(option.children && option.children.length > 0 )
					?
					<div className={styles.optionWithDropdown}>
						<Button className={styles.optionButton}
						        styleType={ isOpened ? "filled" : "none"}
						        onClick={() => setIsOpened(prev => !prev)}>
							<p className={[
								'textButton',
							].join(' ')}>
								{ option.name }
							</p>
							<div className={[
								styles.selectDropdownArrow,
								isOpened ? styles.selectDropdownArrow_rotated : ''
							].join(' ')}>
								<Icons name={'arrow-down-simple'} size={18} />
							</div>
						</Button>
						<div className={[
							styles.optionDropdown,
							isOpened ? styles.optionDropdown_opened : ''
						].join(' ')}>
							{ option.children.map((option, index) => (
								<Option key={option.value} option={option} index={index} onOptionClick={onOptionClick} />
							)) }
						</div>
					</div>
					:
					<Button className={styles.optionButton} styleType={"none"} onClick={() => onOptionClick(option)} >
						{ option.name }
					</Button>
			}
		</>
	)
};


type SelectProps = {

	options: Option[]
	onChange: (option: Option | null) => void
	selectedOption: Option | null
	placeholder?: string
	withClearButton?: boolean,
	wrapperClassName?: string
	buttonClassName?: string
	error?: string | boolean
	showErrorText?: boolean
}

export const Select = ({
	options,
	onChange,
	selectedOption,
	placeholder,
	withClearButton = true,
	wrapperClassName,
	buttonClassName,
	error,
	showErrorText = true
}: SelectProps) => {
	const [isOpened, setIsOpened] = useState(false)

	const ref = useRef<HTMLDivElement>(null)

	useWindowEvent('click', (event) => {
		if (!ref.current?.contains(event.target as Node)) {
			setIsOpened(false)
		}
	})

	const onOptionClick = (option: Option) => {
		setIsOpened(false)
		onChange(option)
	}

	const clear = (event: MouseEvent) => {
		event.preventDefault()
		event.stopPropagation()
		onChange(null)
	}

	/** TODO: Change button to div
	 *  TODO: Add navigation with arrows */
	return (
		<div className={[styles.selectWrapper, wrapperClassName].join(' ')} ref={ref}>
			<Button styleType={"outlined"}
			        className={[
						styles.selectButton,
				        isOpened ? styles.selectButton_opened : "",
				        error ? styles.selectButton_error : "",
				        buttonClassName
			        ].join(' ')}
			        onClick={() => setIsOpened(prev => !prev)}
			>
				<p className={[
					'textButton',
					styles.selectButtonText,
					selectedOption ? '' : styles.selectPlaceholder
				].join(' ')}>
					{ selectedOption?.name ?? placeholder }
				</p>
				<div className={styles.selectButtonUtils}>
					<div className={[
						styles.selectDropdownArrow,
						isOpened ? styles.selectDropdownArrow_rotated : ''
					].join(' ')}>
						<Icons name={'arrow-down-simple'} size={20} />
					</div>
					{ (withClearButton && selectedOption !== null)
						? <Button onClick={clear} className={styles.clearButton} styleType={"none"}>
							<Icons name={'close'} size={16} />
						</Button>
						: null
					}
				</div>
			</Button>
			{
				(showErrorText && typeof error === "string")
					? <p className={'textBody ' + styles.selectError}>
						{ error }
					</p>
					: null}
			{
				isOpened
					? <Section className={styles.selectDropdown} noPadding>
						{ options.map((option, index) => (
							<Option key={option.value} option={option} index={index} onOptionClick={onOptionClick} />
						)) }
					</Section> : null
			}
		</div>
	);
};