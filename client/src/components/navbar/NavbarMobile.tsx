import styles from './Navbar.module.scss'
import {Button} from "@components/ui/button";
import React, {useState} from "react";
import {Dropdown} from "@components/ui/dropdown";
import {NavbarSearch} from "@components/navbar/navbar-search";
import {Divider} from "@components/ui/divider";
import {NavbarList} from "@components/navbar/navbar-list";
import {Hamburger} from "@components/ui/hamburger";

export const NavbarMobile = () => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<Dropdown wrapperClassName={styles.navbarMobileDropdownWrapper}
		          dropdownClassName={styles.navbarMobileDropdown}
		          onToggleCallback={(isOpened) => setIsOpened(isOpened)}
		          forceIsOpened={isOpened}
		>
			<Button className={styles.navbarMobileDropdownToggler}
			        styleType={"outlined"}
			>
				<Hamburger isActive={isOpened} />
			</Button>
			<div className={styles.navbarMobileDropdownContent}>
				<NavbarSearch />
				<Divider />
				<NavbarList listClassName={styles.navbarMobileList}
				            noDropdowns
				            onLinkClick={() => setIsOpened(prev => !prev)} />
			</div>
		</Dropdown>
	);
};