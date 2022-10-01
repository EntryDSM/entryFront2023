import * as _ from "../../styles/main/Footer/Footer.style";
import { Facebook, Github } from "./Logo";

const Footer = () => {
  return (
    <_.FooterContainer>
      <_.InfoContainer>
        <_.Entry>Entry</_.Entry>
        <_.Text>@ 2021 Entry</_.Text>
        <_.Text>개인정보 처리방침 | 이용약관</_.Text>
        <_.Text>(34111) 대전광역시 유성구 가정북로 76(장동 23-9)</_.Text>
        <_.Text>교무실 : 042-866-8822 / Fax : 042-867-9900 행정실 : 042-866-8885 / Fax : 042-863-4308</_.Text>
        <_.Text>Entrepreneur</_.Text>
      </_.InfoContainer>
      <_.IntroduceContainer>
        <_.Text2>Entry 소개</_.Text2>
        <_.Text2>시스템 소개</_.Text2>
        <_.Text2>개발자 소개</_.Text2>
        <_.IconContainer>
          <Facebook></Facebook>
          <Github></Github>
        </_.IconContainer>
      </_.IntroduceContainer>
    </_.FooterContainer>
  );
};

export default Footer;
