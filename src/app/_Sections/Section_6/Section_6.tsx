import Container from "@/app/_UI/Container/Container";
import AnimatedSection from "@/app/_UI/AnimatedTags/AnimatedSection";

import "./Section_6.scss"

interface Props {
  typedClass: string
}

export default function Section_6({ typedClass }: Props) {
  return (
    <AnimatedSection typedClass={typedClass} id="cases">
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <h4 className={`${typedClass}__title-h4`}>Отзывы наших туристов</h4>
        <div className={`${typedClass}__main-box`}>
          <div 
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <iframe 
              style={{
                width: '100%',
                height: '100%',
                border: '1px solid #e6e6e6',
                borderRadius: '8px',
                boxSizing: 'border-box'
              }} 
              src="https://yandex.ru/maps-reviews-widget/226042915166?comments"
            >
            </iframe>
            <a 
              href="https://yandex.ru/maps/org/paradise_travel/226042915166/" 
              target="_blank" 
              style={{
                boxSizing: 'border-box',
                textDecoration: 'none',
                color: '#b3b3b3',
                fontSize: '10px',
                fontFamily: 'YS Text, sans-serif',
                padding: '0 20px',
                position: 'absolute',
                bottom: '8px',
                width: '100%',
                textAlign: 'center',
                left: '0',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
                maxHeight: '14px',
                whiteSpace: 'nowrap'
              }}>Paradise travel на карте Электростали — Яндекс Карты</a>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}