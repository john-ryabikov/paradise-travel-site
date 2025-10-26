import { directions } from "@/app/_Constants/Directions";

import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";
import DirectionsSlider from "./DirectionsSlider";

import "./Section_4.scss"

interface Props {
  typedClass: string
}

export default function Section_4({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="tours">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h3 className={`${typedClass}__title-h3`}>Популярные направления</h3>
        <p className={`${typedClass}__p`}>Ниже представлены направления, куда летают наши туристы</p>
        <div className={`${typedClass}__fon-slider`}>
          <img src="/img/Section-4/fon_slider.svg" alt="Directions"/>
        </div>
        <DirectionsSlider slides={directions} autoplayDelay={3000} typedClass={typedClass}/>
      </Container>
    </AnimatedSection>
  )
}