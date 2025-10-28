import MainContainer from "./_UI/MainContainer/MainContainer";
import Header from "./_Sections/Header/Header";
import Section_1 from "./_Sections/Section_1/Section_1";
import Section_2 from "./_Sections/Section_2/Section_2";
import Section_3 from "./_Sections/Section_3/Section_3";
import Section_4 from "./_Sections/Section_4/Section_4";
import Section_5 from "./_Sections/Section_5/Section_5";
import Section_6 from "./_Sections/Section_6/Section_6";
import Section_7 from "./_Sections/Section_7/Section_7";
import Section_8 from "./_Sections/Section_8/Section_8";
import Footer from "./_Sections/Footer/Footer";

export default function MainPage() {

  return (
    <>
      <Header typedClass="header"/>
      <MainContainer>
        <Section_1 typedClass="section-1"/>
        <Section_2 typedClass="section-2"/>
        <Section_3 typedClass="section-3"/>
        <Section_4 typedClass="section-4"/>
        <Section_5 typedClass="section-5"/>
        <Section_6 typedClass="section-6"/>
        <Section_7 typedClass="section-7"/>
        <Section_8 typedClass="section-8"/>
        <Footer typedClass="footer"/>
      </MainContainer>
    </>
  )
}
