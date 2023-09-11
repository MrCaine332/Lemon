import React from 'react';

export type IconNames = 'clock' | 'search' | 'close' | 'google' | 'facebook'
	| 'comment' | 'eye' | 'arrow-down-simple' | 'user' | 'logout' | 'plus'
	| 'favourite' | 'cog'

interface IIcons {
	name?: IconNames
	size?: number | string
	color?: string
}

const Icons = ({ name, size = 24, color }: IIcons) => {
	switch (name) {
		case "clock":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V7Z" fill={color}/>
				</svg>
			)
		case "search":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3199ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill={color}/>
				</svg>
			)
		case "close":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill={color}/>
				</svg>
			)
		case "google":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.5977 10.1812H12.0527V14.2725H17.4627C16.5977 17 14.4615 17.9087 12.009 17.9087C11.0586 17.9099 10.122 17.6819 9.27853 17.2439C8.43508 16.8059 7.70973 16.1709 7.16402 15.3929C6.6183 14.6148 6.26832 13.7165 6.14377 12.7743C6.01923 11.8322 6.12379 10.8738 6.44858 9.98067C6.77337 9.08751 7.30882 8.28588 8.00949 7.64378C8.71015 7.00168 9.55537 6.53807 10.4734 6.29228C11.3915 6.04649 12.3553 6.02577 13.283 6.23188C14.2108 6.43799 15.0751 6.86485 15.8027 7.47625L18.7752 4.645C17.5782 3.54229 16.1301 2.74843 14.5566 2.33233C12.9832 1.91623 11.3319 1.89047 9.74624 2.25728C8.16056 2.62409 6.68839 3.37239 5.45751 4.43721C4.22663 5.50203 3.27425 6.8512 2.68306 8.36757C2.09186 9.88395 1.87972 11.5217 2.06504 13.1387C2.25037 14.7556 2.82756 16.3029 3.7465 17.6462C4.66545 18.9895 5.89838 20.0882 7.33826 20.8469C8.77814 21.6057 10.3814 22.0015 12.009 22C17.5227 22 22.509 18.3637 21.5977 10.1812Z" fill={color}/>
				</svg>
			)
		case "facebook":
			return (
				<svg width={size} height={size} viewBox="-5 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier"><title>facebook [#176]</title>
						<desc>Created with Sketch.</desc>
						<defs></defs>
						<g id="Page-1" stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
							<g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill={color}>
								<g id="icons" transform="translate(56.000000, 160.000000)">
									<path
										d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
										id="facebook-[#176]"></path>
								</g>
							</g>
						</g>
					</g>
				</svg>
			)
		case "comment":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M2.37546 5.66957C2.66565 3.98488 4.00472 2.74648 5.69477 2.48932C7.31411 2.24293 9.53559 2 12 2C14.4644 2 16.6859 2.24293 18.3052 2.48932C19.9953 2.74648 21.3344 3.98488 21.6245 5.66957C21.8268 6.84372 22 8.33525 22 10C22 11.6647 21.8268 13.1563 21.6245 14.3304C21.3344 16.0151 19.9953 17.2535 18.3052 17.5107C16.8238 17.7361 14.8384 17.9586 12.6241 17.9949L6.50873 21.6085C5.84211 22.0024 5 21.5219 5 20.7476V17.344C3.64656 16.8939 2.62456 15.7766 2.37546 14.3304C2.17321 13.1563 2 11.6647 2 10C2 8.33525 2.17321 6.84372 2.37546 5.66957ZM6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44771 9 6 8.55228 6 8ZM6 12C6 11.4477 6.44772 11 7 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H7C6.44772 13 6 12.5523 6 12Z" fill={color}/>
				</svg>
			)
		case "eye":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.0006 20C17.0271 20 20.4745 16.8417 22.3428 14.494C23.5187 13.0163 23.5187 10.9837 22.3428 9.506C20.4745 7.15826 17.0271 4 12.0006 4C6.97402 4 3.52661 7.15826 1.65833 9.506C0.482379 10.9837 0.482378 13.0163 1.65833 14.494C3.52661 16.8417 6.97402 20 12.0006 20ZM12.0005 16C14.2097 16 16.0005 14.2091 16.0005 12C16.0005 9.79086 14.2097 8 12.0005 8C9.7914 8 8.00054 9.79086 8.00054 12C8.00054 14.2091 9.7914 16 12.0005 16Z" fill={color}/>
					<path fillRule="evenodd" clipRule="evenodd" d="M10.0018 11.9153C10.0006 11.9434 10 11.9716 10 12C10 12.5072 10.1888 12.9703 10.5 13.3229C10.7284 13.5817 11.0228 13.781 11.3569 13.8943C11.5587 13.9628 11.775 14 12 14C13.1046 14 14 13.1046 14 12C14 11.775 13.9628 11.5587 13.8943 11.3569C13.781 11.0228 13.5817 10.7284 13.3229 10.5C12.9703 10.1888 12.5072 10 12 10C11.9716 10 11.9434 10.0006 11.9153 10.0018C11.9701 10.1577 12 10.3253 12 10.5C12 10.6308 11.9833 10.7577 11.9518 10.8786C11.8155 11.4028 11.4028 11.8155 10.8786 11.9518C10.7577 11.9833 10.6308 12 10.5 12C10.3253 12 10.1577 11.9701 10.0018 11.9153Z" fill={color}/>
				</svg>
			)
		case "arrow-down-simple":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill={color} />
				</svg>
			)
		case "user":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12 13C8.13401 13 5 16.134 5 20V22C5 22.5523 4.55228 23 4 23C3.44772 23 3 22.5523 3 22V20C3 15.0294 7.02944 11 12 11C16.9706 11 21 15.0294 21 20V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V20C19 16.134 15.866 13 12 13Z" fill={color}/>
					<path fillRule="evenodd" clipRule="evenodd" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 13C15.3137 13 18 10.3137 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 10.3137 8.68629 13 12 13Z" fill={color}/>
				</svg>
			)
		case "cog":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M19.9495 7.09041C19.9599 6.30932 19.6671 5.52493 19.0711 4.92893C18.4751 4.33293 17.6907 4.04013 16.9096 4.05052C16.9093 4.05053 16.9099 4.05052 16.9096 4.05052C16.4779 4.05639 16.0463 4.1549 15.649 4.34601C15.5066 4.41451 15.3685 4.49489 15.2362 4.58717C15.1852 4.62271 15.1196 4.63082 15.0623 4.60703C15.0049 4.58325 14.9642 4.53113 14.9533 4.47002C14.925 4.3112 14.8842 4.1567 14.832 4.00759C14.6862 3.59151 14.4513 3.21732 14.1501 2.9079C14.1499 2.90769 14.1503 2.90811 14.1501 2.9079C13.6052 2.34823 12.8429 2 12 2C11.1571 2 10.3954 2.3476 9.85047 2.90727C9.85027 2.90748 9.85068 2.90706 9.85047 2.90727C9.54935 3.21669 9.31383 3.59151 9.16804 4.00759C9.11578 4.1567 9.07498 4.31119 9.04667 4.47001C9.03577 4.53113 8.99509 4.58325 8.93775 4.60702C8.88036 4.63082 8.81477 4.62271 8.76382 4.58717C8.6315 4.49489 8.4934 4.4145 8.35102 4.34601C7.95371 4.15489 7.52302 4.0564 7.09129 4.05053C7.091 4.05053 7.09159 4.05054 7.09129 4.05053C6.3102 4.04014 5.52493 4.33293 4.92893 4.92893C4.33293 5.52493 4.04013 6.30931 4.05052 7.09041C4.05053 7.09071 4.05052 7.09012 4.05052 7.09041C4.05639 7.52213 4.15489 7.95371 4.34601 8.35101C4.4145 8.4934 4.49489 8.63149 4.58717 8.76381C4.62271 8.81477 4.63082 8.88036 4.60702 8.93775C4.58325 8.99509 4.53113 9.03578 4.47001 9.04667C4.31119 9.07498 4.15669 9.11579 4.00757 9.16804C3.5915 9.31384 3.21732 9.54874 2.9079 9.84986C2.90769 9.85006 2.90811 9.84965 2.9079 9.84986C2.34823 10.3948 2 11.1571 2 12C2 12.8429 2.3476 13.6046 2.90727 14.1495C2.90748 14.1497 2.90706 14.1493 2.90727 14.1495C3.21669 14.4506 3.5915 14.6862 4.00757 14.832C4.15669 14.8842 4.31119 14.925 4.47001 14.9533C4.53113 14.9642 4.58325 15.0049 4.60702 15.0623C4.63082 15.1196 4.62271 15.1852 4.58717 15.2362C4.49489 15.3685 4.4145 15.5066 4.34601 15.649C4.15489 16.0463 4.0564 16.477 4.05053 16.9087C4.05053 16.909 4.05054 16.9084 4.05053 16.9087C4.04014 17.6898 4.33293 18.4751 4.92893 19.0711C5.52493 19.6671 6.30932 19.9599 7.09041 19.9495C7.09071 19.9495 7.09012 19.9495 7.09041 19.9495C7.52213 19.9436 7.9537 19.8451 8.351 19.654C8.49339 19.5855 8.63149 19.5051 8.76381 19.4128C8.81477 19.3773 8.88036 19.3692 8.93775 19.393C8.99509 19.4168 9.03578 19.4689 9.04667 19.53C9.07498 19.6888 9.11579 19.8433 9.16805 19.9924C9.31385 20.4085 9.54874 20.7827 9.84986 21.0921C9.85006 21.0923 9.84965 21.0919 9.84986 21.0921C10.3948 21.6518 11.1571 22 12 22C12.8429 22 13.6046 21.6524 14.1495 21.0927C14.1497 21.0925 14.1493 21.0929 14.1495 21.0927C14.4506 20.7833 14.6862 20.4085 14.832 19.9924C14.8842 19.8433 14.925 19.6888 14.9533 19.53C14.9642 19.4689 15.0049 19.4168 15.0623 19.393C15.1196 19.3692 15.1852 19.3773 15.2362 19.4128C15.3685 19.5051 15.5066 19.5855 15.649 19.654C16.0463 19.8451 16.477 19.9436 16.9087 19.9495C16.909 19.9495 16.9084 19.9495 16.9087 19.9495C17.6898 19.9599 18.4751 19.6671 19.0711 19.0711C19.6671 18.4751 19.9599 17.6907 19.9495 16.9096C19.9495 16.9093 19.9495 16.9099 19.9495 16.9096C19.9436 16.4779 19.8451 16.0463 19.654 15.649C19.5855 15.5066 19.5051 15.3685 19.4128 15.2362C19.3773 15.1852 19.3692 15.1196 19.393 15.0623C19.4168 15.0049 19.4689 14.9642 19.53 14.9533C19.6888 14.925 19.8433 14.8842 19.9924 14.832C20.4085 14.6862 20.7827 14.4513 21.0921 14.1501C21.0923 14.1499 21.0919 14.1503 21.0921 14.1501C21.6518 13.6052 22 12.8429 22 12C22 11.1571 21.6524 10.3954 21.0927 9.85047C21.0925 9.85027 21.0929 9.85068 21.0927 9.85047C20.7833 9.54936 20.4085 9.31384 19.9924 9.16804C19.8433 9.11579 19.6888 9.07498 19.53 9.04667C19.4689 9.03578 19.4168 8.99509 19.393 8.93775C19.3692 8.88036 19.3773 8.81477 19.4128 8.76381C19.5051 8.63149 19.5855 8.49339 19.654 8.351C19.8451 7.9537 19.9436 7.52213 19.9495 7.09041C19.9495 7.09012 19.9495 7.09071 19.9495 7.09041ZM17.6569 6.34315C17.3104 5.99673 16.7691 5.95644 16.3803 6.22762C15.7904 6.63904 15.0069 6.74922 14.2962 6.45448C13.5872 6.16051 13.1107 5.52985 12.9844 4.82099C12.9012 4.3543 12.4899 4 12 4C11.5101 4 11.0988 4.35429 11.0156 4.82099C10.8893 5.52984 10.4128 6.16051 9.70384 6.45448C8.99308 6.74922 8.20964 6.63904 7.61972 6.22761C7.2309 5.95644 6.68956 5.99673 6.34314 6.34314C5.99673 6.68956 5.95644 7.2309 6.22762 7.61972C6.63904 8.20964 6.74922 8.99308 6.45448 9.70384C6.16051 10.4128 5.52984 10.8893 4.82098 11.0156C4.35429 11.0988 4 11.5101 4 12C4 12.4899 4.35429 12.9012 4.82098 12.9844C5.52984 13.1107 6.16051 13.5872 6.45448 14.2962C6.74922 15.0069 6.63904 15.7904 6.22762 16.3803C5.95644 16.7691 5.99673 17.3104 6.34315 17.6569C6.68957 18.0033 7.2309 18.0436 7.61972 17.7724C8.20963 17.361 8.99307 17.2508 9.70384 17.5455C10.4128 17.8395 10.8893 18.4702 11.0156 19.179C11.0988 19.6457 11.5101 20 12 20C12.4899 20 12.9012 19.6457 12.9844 19.179C13.1107 18.4702 13.5872 17.8395 14.2961 17.5455C15.0069 17.2508 15.7904 17.361 16.3803 17.7724C16.7691 18.0436 17.3104 18.0033 17.6569 17.6569C18.0033 17.3104 18.0436 16.7691 17.7724 16.3803C17.361 15.7904 17.2508 15.0069 17.5455 14.2962C17.8395 13.5872 18.4702 13.1107 19.179 12.9844C19.6457 12.9012 20 12.4899 20 12C20 11.5101 19.6457 11.0988 19.179 11.0156C18.4702 10.8893 17.8395 10.4128 17.5455 9.70384C17.2508 8.99307 17.361 8.20963 17.7724 7.61972C18.0436 7.2309 18.0033 6.68957 17.6569 6.34315Z" fill={color}/>
					<path fillRule="evenodd" clipRule="evenodd" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill={color}/>
				</svg>
			)
		case "logout":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M11.0287 15.0007C11.5806 14.9799 12.0449 15.4104 12.0657 15.9623C12.1127 17.2065 12.1786 18.1145 12.2435 18.7656C12.3074 19.4068 12.6945 19.7926 13.2341 19.8586C13.8703 19.9363 14.7678 20 15.9995 20C17.2312 20 18.1287 19.9363 18.765 19.8586C19.3043 19.7926 19.6916 19.4067 19.7555 18.7653C19.8758 17.5568 19.9995 15.4688 19.9995 12C19.9995 8.53118 19.8758 6.44321 19.7555 5.23468C19.6916 4.59333 19.3043 4.20736 18.765 4.14144C18.1287 4.06366 17.2312 4 15.9995 4C14.7678 4 13.8703 4.06365 13.234 4.14143C12.6945 4.20739 12.3074 4.59318 12.2435 5.23437C12.1786 5.88545 12.1127 6.79354 12.0657 8.03772C12.0449 8.58961 11.5806 9.02012 11.0287 8.99929C10.4768 8.97845 10.0463 8.51417 10.0671 7.96228C10.1153 6.68524 10.1837 5.73543 10.2534 5.03611C10.3998 3.56595 11.4248 2.3477 12.9914 2.15621C13.7206 2.06707 14.7003 2 15.9995 2C17.2987 2 18.2785 2.06707 19.0077 2.15622C20.5743 2.34774 21.5992 3.56655 21.7456 5.03643C21.8745 6.33068 21.9995 8.48847 21.9995 12C21.9995 15.5115 21.8745 17.6693 21.7456 18.9636C21.5992 20.4334 20.5744 21.6523 19.0077 21.8438C18.2785 21.9329 17.2987 22 15.9995 22C14.7003 22 13.7206 21.9329 12.9914 21.8438C11.4248 21.6523 10.3998 20.4341 10.2534 18.9639C10.1837 18.2646 10.1153 17.3148 10.0671 16.0377C10.0463 15.4858 10.4768 15.0215 11.0287 15.0007Z" fill={color}/>
					<path fillRule="evenodd" clipRule="evenodd" d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z" fill={color}/>
				</svg>
			)
		case "plus":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z" fill={color}/>
				</svg>
			)
		case "favourite":
			return (
				<svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M18.7857 20.3419C18.8968 18.3948 18.9999 15.6142 18.9999 12C18.9999 8.8112 18.9197 6.52151 18.8255 4.93337C18.7652 3.91589 18.0576 3.20915 17.0607 3.14511C15.8036 3.06436 14.1326 3 11.9999 3C9.86735 3 8.19642 3.06436 6.93933 3.1451C5.94237 3.20914 5.23476 3.91593 5.17444 4.9335C5.08029 6.52165 5.00002 8.81131 5 12C4.99998 15.6142 5.10309 18.3948 5.21419 20.3419L10.2699 16.7731C11.3071 16.041 12.6928 16.041 13.73 16.7731L18.7857 20.3419ZM6.81113 1.14921C4.7967 1.2786 3.2974 2.8001 3.17794 4.81514C3.0811 6.44881 3.00002 8.77846 3 12C2.99997 17.0256 3.19727 20.4726 3.34399 22.3412C3.4031 23.0939 4.24523 23.4739 4.8621 23.0385L11.4233 18.4071C11.769 18.163 12.2309 18.163 12.5766 18.4071L19.1378 23.0385C19.7547 23.4739 20.5968 23.0939 20.6559 22.3412C20.8026 20.4726 20.9999 17.0256 20.9999 12C20.9999 8.77836 20.9189 6.44867 20.822 4.81499C20.7025 2.80002 19.2033 1.27861 17.1889 1.14922C15.8866 1.06557 14.1728 1 11.9999 1C9.8272 1 8.11343 1.06557 6.81113 1.14921Z" fill={color}/>
				</svg>
			)
		default:
			return null
	}
}

export default Icons;