
// Type for signin/signup form in AccountAuth.tsx
import React from "react";

export interface IForms {
    LOGIN: {
        type: string
        placeholder: string
        credentialType: string
    }[]
    REGISTRATION: {
        type: string
        placeholder: string
        credentialType: string
    }[]
}


// Types for Navbar and it's children
export interface INavbar {
    dropdowns: boolean
    links: boolean
    search: boolean
    isVertical: boolean
    linkOnClick?: () => void
}

export interface INavbarList {
    dropdowns: boolean
    linkOnClick?: () => void
}

export interface INavbarDropdown {
    items: INavbarItem[]
}

export interface INavbarItem {
    linkTitle: string
    linkAddress: string
    submenuItems?: INavbarItem[]
}


// Type for Slider
export interface ISlider {
    itemsToDisplay?: number
    height?: string
    dotsRef?: React.RefObject<HTMLDivElement>
    leftButtonRef?: React.RefObject<HTMLDivElement>
    rightButtonRef?: React.RefObject<HTMLDivElement>
    children: React.ReactElement[]
    withShadow?: boolean
}


// Type for AppButton.tsx
export interface IAppButton {
    type: string
    name?: string
    onClick?: () => void
    to?: string
    className?: string
    disabled?: boolean
    children?: React.ReactElement[]
}