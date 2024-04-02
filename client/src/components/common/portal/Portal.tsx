import styles from './Portal.module.scss'
import {createPortal} from "react-dom";

type PortalProps = {
	children: React.ReactNode
}

export const Portal = ({ children }: PortalProps) => {
	return createPortal(
		<div className="portal-container">
			{children}
		</div>,
		document.getElementById("portal-root")!
	);
};