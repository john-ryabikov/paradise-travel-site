import { useAlertCookies } from "@/app/_Store/store";

import "./AlertCookies.scss"

export default function AlertCookies() {

    const { showAlertCookies, closeAlertCookies } = useAlertCookies()

    return (
        <p className={`alert-cookies ${!showAlertCookies ? "not-active" : ""}`}>
            <span className="alert-cookies__text">
                Этот сайт использует файлы cookie и другие технологии для сбора аналитических данных. Это помогает нам улучшать работу сайта и показывать Вам релевантный контент.
                Продолжая использовать сайт, Вы соглашаетесь с этим.
            </span>
            <button onClick={closeAlertCookies}>
                <span>ОК</span>
            </button>
        </p>
    )
}