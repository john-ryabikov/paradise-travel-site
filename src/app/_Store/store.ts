import { create } from "zustand";
import type { IAlertCookies, IAlerts, IMenu, IPopup } from "./store.types";
import { persist } from "zustand/middleware";

export const usePopups = create<IPopup>(set => ({
    showPopup: false,
    openPopup: () => set(() => ({showPopup: true})),
    closePopup: () => set(() => ({showPopup: false}))
}))

export const useMenu = create<IMenu>(set => ({
    showMenu: false,
    openMenu: () => set(() => ({showMenu: true})),
    closeMenu: () => set(() => ({showMenu: false}))
}))

export const useAlerts = create<IAlerts>(set => ({
    showAlertDone: false,
    showAlertError: false,
    showAlertErrorPhone: false,
    
    toggleAlertDone: () => {
        set((state) => ({showAlertDone: !state.showAlertDone}))
        setTimeout(() => {
            set((state) => ({showAlertDone: !state.showAlertDone}))
        }, 2500)
    },
    toggleAlertError: () => {
        set((state) => ({showAlertError: !state.showAlertError}))
        setTimeout(() => {
            set((state) => ({showAlertError: !state.showAlertError}))
        }, 2500)
    },
    toggleAlertErrorPhone: () => {
        set((state) => ({showAlertErrorPhone: !state.showAlertErrorPhone}))
        setTimeout(() => {
            set((state) => ({showAlertErrorPhone: !state.showAlertErrorPhone}))
        }, 2500)
    }
}))

export const useAlertCookies = create<IAlertCookies>()(
    persist (
        (set => ({
            showAlertCookies: true,
            closeAlertCookies: () => {
                set((state) => ({showAlertCookies: !state.showAlertCookies}))
            }
        })),
        {name: "cookies-rule"}
    )
)