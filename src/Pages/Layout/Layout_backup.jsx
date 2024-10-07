// Layout.jsx
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section1 from "../Section/Section1/Section1";
import Section2 from "../Section/Section2/Section2";
import Section3 from "../Section/Section3/Section3";
import Section4 from "../Section/Section4.jsx/Section4";
import CustomCard from "../Section/Section7/Section7";
import Section8 from "../Section/Section8/Section8";
import Section8M from "../Section/Section8/Section8M";
import Section8Main from "../Section/Section8/Section8Main";
import MainSection3 from "../Section/ThirdMainSection/MainSection3";
import MainSection4 from "../Section/FourthMainSection/MainSection4";
import MainSection2 from "../Section/SecondMainSection/MainSection2";
import VideoCard from "../Section/Section10/Section10";
import Section11 from "../Section/Section11/Section11";
import SticyHeader from "../Section/SticyHeader/SticyHeader";
import CardMotion from "../Section/CardMotion/CardMotion";
import FAQList from "../Section/QuestionAnswerSection/Section12";
import Section13 from "../Section/QuestionAnswerSection/Section13";
import SlidingStack from "../Section/TestSection/SectionTest";
import CardSection from "../Section/FourthMainSection/MobileCardsSection/CardSection";
import CardSectionDesk from "../Section/FourthMainSection/DesktopCardSection/CardSectionDesk";
import CardSliderSection from "../Section/CardsSliderSection/CardSliderSection";
import MasonryLayout from "../Section/CardsSliderSection/MansoryLayout";
import CombineMansorySlider from "../Section/CardsSliderSection/CombineMansorySlider";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Section1 />
        <Section2 />
     
        <MainSection2 />

      
        <MainSection3 />
        <MainSection4 />
       
        <FAQList />
        <Section13 />

     
      </main>
      <Footer />
    </>
  );
};

export default Layout;
