import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_7.scss"

interface Props {
  typedClass: string
}

export default function Section_7({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="office">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <div className={`${typedClass}__cont-text`}>
          <h5 className={`${typedClass}__h5`}>Офис продаж работает</h5>
          <p className={`${typedClass}__p1`}>с 10 утра до 19 вечера</p>
          <p className={`${typedClass}__sub-h5`}>График работы: <b>пн-сб</b></p>
          <p className={`${typedClass}__p1-span`}>*воскресенье выходной</p>
          <div className={`${typedClass}__adress`}>
              <div className={`${typedClass}__adress-icon`}>
                  <img src="/img/Section-7/location_icon.png" alt="Локация"/>
              </div>
              <p className={`${typedClass}__p2`}>г. Электросталь, ул. Мира 9, 1 этаж<br/><a className={`${typedClass}__adress-call`} href="tel:+79251888840">+7 (925) 188-88-40</a></p>
          </div>
          <div className={`${typedClass}__coffee-txt`}>
              <p className={`${typedClass}__p3`}>Пока наши менеджеры будут<br/>подыскивать Вам тур, мы угостим<br/>Вас чашкой ароматного кофе!</p>
              <div className={`${typedClass}__coffee-icon`}>
                  <img src="/img/Section-7/coffee_icon.png" alt="Кофе"/>
              </div>
          </div>
        </div>
        <div className={`${typedClass}__cont-map`}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A62f7022400d3230d5e1bd675135cb8301c67dc810d96747a6a05c8e8899db780&amp;source=constructor" width="90%" height="420" style={{ border: '0' }}></iframe>
        </div>
      </Container>
    </AnimatedSection>
  )
}