import { socials } from "@/app/_Constants/Socials";
import { partners } from "@/app/_Constants/Partners";

import Container from "@/app/_UI/Container/Container";
import FormSend from "../../_UI/FormSend/FormSend";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_8.scss"

interface Props {
  typedClass: string
}

export default function Section_8({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="contacts">
      <h6 className={`${typedClass}__title-h6`}>Оставьте заявку и мы Вам перезвоним</h6>
      <Container typedClass={`${typedClass}__cont wrapper`}>
          <div className={`${typedClass}__info`}>
            <p className={`${typedClass}__info-text`}>
                <span className={`${typedClass}__p1`}>Если у Вас остались вопросы</span>
                <span className={`${typedClass}__sub-p1`}>Отправьте нам письмо, укажите краткую вводную информацию по Вашему предложению и мы обязательно что-нибудь для Вас придумаем!</span>
            </p>
            <div className={`${typedClass}__info-partenrs`}>
                <p className={`${typedClass}__p2`}>Наши партнеры</p>
                <p className={`${typedClass}__partenrs-box`}>
                  {partners.map((partner => (
                    <span className={`${typedClass}__${partner.prefix}`} key={partner.id}></span>
                  )))}
                </p>
            </div>
            <div className={`${typedClass}__info-soc`}>
                <p className={`${typedClass}__p3`}>Мы в соцсетях</p>
                <p className={`${typedClass}__soc-box`}>
                  {socials.map((soc => (
                    <a className={`${typedClass}__soc-box-link`} href={soc.href} target="_blank" rel="nofollow" key={soc.id}>
                      <img src={soc.icon} alt={soc.id} />
                    </a>
                  )))}
                </p>
            </div>
          </div>
          <FormSend typedClass="form-send" isPopup={false}/>
      </Container>
    </AnimatedSection>
  )
}