"use client"

import { usePopups } from "@/app/_Store/store"

import "./ButtonPopup.scss"

interface Props {
  typedClass: string,
  cont?: string,
  inHeader?: boolean,
  second?: boolean
}

export default function ButtonPopup({ typedClass, cont, inHeader, second }: Props) {

    const { openPopup } = usePopups()

    return (
        <>
            {inHeader ? (
                <button className={`${typedClass}_call`} onClick={openPopup}>
                    <span>{cont}</span>
                </button>
            ) : (
                <button className={`${typedClass} ${second ? "second" : ""}`} onClick={openPopup}>
                    <span className={`${typedClass}__btn-cont`}>{cont}</span>
                </button>
            )}
        </>
    )
}
