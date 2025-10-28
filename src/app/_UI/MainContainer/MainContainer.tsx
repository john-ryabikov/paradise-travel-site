"use client"

import { usePopups } from "@/app/_Store/store"
import { useLayoutEffect } from "react"

import Popup from "@/app/_Sections/Popup/Popup"
import MenuMobile from "../MenuMobile/MenuMobile"
import Alerts from "../Alerts/Alerts"
import AnimatedMain from "../AnimatedTags/AnimatedMain"
import AlertCookies from "../AlertCookies/AlertCookies"

export default function MainContainer({ children }: Readonly<{children: React.ReactNode}>){

    const { showPopup } = usePopups()

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <AnimatedMain typedClass={`main-page`}>
            <AlertCookies/>
            <Alerts/>
            {showPopup && <Popup/>}
            <MenuMobile typedClass="menu-mobile"/>
            {children}
        </AnimatedMain>
    )
}
