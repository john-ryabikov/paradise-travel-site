"use client"

import { useScrollHeader } from "@/hooks/ScrollHeader/useScrollHeader";

export default function HeaderLayout({ typedClass, children }:{typedClass: string, children: React.ReactNode}) {

    const isScrolled = useScrollHeader(50);

    return (
        <header className={`${typedClass} ${isScrolled ? "scrolled" : ""}`}>
            {children}
        </header>
    )
}
