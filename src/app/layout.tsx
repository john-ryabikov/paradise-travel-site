import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Script from "next/script";
import VKWidget from "./_UI/VKWidget/VKWidget";
import YandexMetrika from "./_Metrika/YandexMetrica";
// import PreloadContent from "./_UI/PreloadContent/PreloadContent";

import "./globals.scss";

const manrope = Manrope({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--manrope"
});

export const metadata: Metadata = {
  title: "Турагентство PARADISE TRAVEL - официальный сайт в г. Электросталь",
  description: "Туры онлайн от турагентства Paradise travel. Лучшие предложения на туры Электросталь, Ногинск, Павловский Посад, Орехово-Зуево/Дешевый и качественный отдых. Туры в Турцию,Таиланд,Тунис,Кипр,Греция и др.страны. Поиск дешевых путешествий. Подробнее: 8-925-188-88-40",
  authors: [{ name: 'Just-Site.ru' }],
  keywords: "Турагентство в Электростали, Турагентство Электросталь, Турагентство Электросталь Paradise Travel, Турагентство Paradise Travel",
  robots: "noyaca",
  generator: 'Next.js',
  formatDetection: {
    telephone: false,
  },
  verification: {
    yandex: "15a0607f6836702d"
  },
  icons: {
    icon: [
      { url: '/favicon.png' }
      // new URL('/favicon.png'),
    ]
  },
  openGraph: {
    images: {
      url: "https://prtravel.ru/img/OG/og_image.jpg"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable}`}>
        {/* <PreloadContent/> */}
        {children}
        <YandexMetrika id={54927598}/>
        <VKWidget
          communityId={46869821}
          options={{ welcomeScreen: 1 }}
        />
        <Script src="/js/configs.js"/>
      </body>
    </html>
  );
}
