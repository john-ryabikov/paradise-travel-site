import { navbar } from "@/app/_Constants/Navigation";

import HeaderLayout from "./HeaderLayout";
import Container from "@/app/_UI/Container/Container";
import ButtonPopup from "@/app/_UI/ButtonPopup/ButtonPopup";
import MenuButton from "./MenuButton";

import "./Header.scss"

interface Props {
  typedClass: string
}

export default function Header({ typedClass }: Props) {
  return (
    <HeaderLayout typedClass={typedClass}>
      <Container typedClass={`${typedClass}__cont wrapper`}>
        <a className={`${typedClass}__logo`} href="#main">
          <img src="/img/Header/main_logo.svg" alt="Paradise Travel"/>
        </a>
        <nav className={`${typedClass}__nav`}>
          <ul className={`${typedClass}__nav-links`}>
            {navbar.map((link) => (
              <li className={`${typedClass}__nav-link`} key={link.id}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`${typedClass}__phone`}>
          <img className={`${typedClass}__phone-icon`} src="/img/Icons/call_icon.svg" alt="Icon" />
          <p className={`${typedClass}__phone-cont`}>
            <ButtonPopup 
              typedClass="button-popup"  
              cont="Заказать звонок!" 
              inHeader={true}
            />
            <span className={`${typedClass}__phone-text-num`}>+7 (925) 188-88-40</span>
          </p>
        </div>
        <MenuButton typedClass={`${typedClass}__menu-btn`}/>
      </Container>
    </HeaderLayout>
  )
}