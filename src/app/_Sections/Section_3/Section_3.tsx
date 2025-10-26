import { prems } from "@/app/_Constants/Prems";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_3.scss"

interface Props {
  typedClass: string
}

export default function Section_3({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h2 className={`${typedClass}__title-h2`}>Более 2000 туристов ежегодно<br/>доверяют нам свой отпуск</h2>
        <div className={`${typedClass}__prems`}>
          {prems.map((prem) => (
            <div className={`${typedClass}__prem-card`} key={prem.id}>
              <img className={`${typedClass}__prem-card-icon`} src={prem.icon} alt={prem.id}/>
              <p className={`${typedClass}__prem-card-text`}>
                {prem.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}