import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import MouseScrolling from "@/app/_UI/MouseScrolling/MouseScrolling";

import "./Section_1.scss"

interface Props {
  typedClass: string
}

export default function Section_1({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="main">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <div className={`${typedClass}__main-cont`}>
          <h1 className={`${typedClass}__title-h1`}>Получите индивидуальный<br/>подбор тура</h1>
          <p className={`${typedClass}__title`}>Не откладывайте ничего на завтра - начните свое путешествие прямо сейчас!</p>
          <p className={`${typedClass}__buttons-row`}>
            <ButtonPopup typedClass="button-popup" cont="Подобрать тур"/>
            <a className={`${typedClass}__tg-link`} href="https://t.me/svetbali1" target="_blank" rel="nofollow">
              <img src="/img/Section-1/tg_icon.svg" alt="TG" />
              <span>Телеграм-канал с турами</span>
            </a>
          </p>
        </div>
      </Container>
      <MouseScrolling/>
    </AnimatedSection>
  )
}
