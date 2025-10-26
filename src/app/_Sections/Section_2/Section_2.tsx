import { agents } from "@/app/_Constants/Agents";

import Container from "@/app/_UI/Container/Container";
import AgentsSlider from "./AgentsSlider";

import "./Section_2.scss"

interface Props {
  typedClass: string
}

export default function Section_2({ typedClass }: Props) {
  return (
    <section className={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <div className={`${typedClass}__text`}>
          <div className={`${typedClass}__text-line`}></div>
          <p className={`${typedClass}__p`}>Горящие туры с дисконтом от надежных туроператоров</p>
          <div className={`${typedClass}__text-line`}></div>
        </div>
        <AgentsSlider slides={agents} autoplayDelay={3000} typedClass={typedClass}/>
      </Container>
    </section>
  )
}