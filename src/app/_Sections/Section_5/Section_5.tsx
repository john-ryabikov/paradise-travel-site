import { crew } from "@/app/_Constants/Crew";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_5.scss"

interface Props {
  typedClass: string
}

export default function Section_5({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="crew">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h4 className={`${typedClass}__title-h4`}>Наша команда</h4>
        <p className={`${typedClass}__subtitle`}>Эксперты, профессионалы в своем деле, понимаем нюансы туристического бизнеса. Мы можем еще много сказать, но, пожалуй, <span>лучше покажем это в работе</span></p>
        <img className={`${typedClass}__allcrew`} src="/img/Section-5/paradise_crew.jpg" alt="Команда Paradise Travel"/>
        <div className={`${typedClass}__crew`}>
          <div className={`${typedClass}__crew-wrapper`}>
            {crew.map(card => (
              <div className={`${typedClass}__crew-card`} key={card.id}>
                <img className={`${typedClass}__crew-img`} src={card.image} alt={card.name}/>
                <p className={`${typedClass}__crew-name`}>{card.name}</p>
                <p className={`${typedClass}__crew-spec`}>{card.post}</p>
                <p className={`${typedClass}__crew-soc`}>
                    <a href="https://vk.com/id19714489" className={`${typedClass}__crew-vk`} target="_blank" rel="nofollow">
                        <img src="/img/Icons/vk_icon.svg" alt="VK"/>
                    </a>
                    <a href="https://max.ru/u/f9LHodD0cOJf9OCzEqtcrL83CQf8c6hMOZmUB8ihCNhg2pnGiVMTjbxaYWQ" className={`${typedClass}__crew-max`} target="_blank" rel="nofollow">
                        <img src="/img/Icons/max_icon.svg" alt="MAX"/>
                    </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}