"use client"

import { useScrollHeader } from "@/hooks/ScrollHeader/useScrollHeader";

import "./MouseScrolling.scss"

export default function MouseScrolling() {

    const isScrolled = useScrollHeader(50);

    return (
        <div className={`mouse-scroll ${isScrolled ? "hidden" : ""}`}>
            <div className="mouse">
                <div className="mouse-in"></div>
            </div>
        </div>
    )
}
