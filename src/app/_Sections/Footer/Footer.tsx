import Container from "@/app/_UI/Container/Container";

import "./Footer.scss"

interface Props {
  typedClass: string
}

export default function Footer({ typedClass }: Props) {
  return (
    <footer className={`${typedClass}`}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <img className={`${typedClass}__img`} src="/img/Footer/logo-footer.png" alt="Paradise Travel"/>
        <p className={`${typedClass}__info`}>
          <span className={`${typedClass}__author`}>Дизайн и разработка сайта - <a className={`${typedClass}__author-link`} href="https://just-site.ru" target="_blank" rel="nofollow">Just-site.ru</a></span>
          <span className={`${typedClass}__copyrights`}>&copy;Paradise Travel 2012-{new Date().getFullYear()}. <a className={`${typedClass}__copyrights-link`} href="mailto:paradisetravel.el@gmail.com" rel="nofollow">paradisetravel.el@gmail.com</a></span>
        </p>
      </Container>
    </footer>
  )
}