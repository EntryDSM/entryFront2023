import * as _ from "../../../styles/main/Header/Header.style";
import { EntryLogo, HeaderStickLogo } from "./Logo";

function Header() {
  return (
      <_.HeaderContainer>
        <EntryLogo />
        <HeaderStickLogo />
        <_.TitleContainer>
          <_.Title>
            <a href="#home">RECIPT</a>
          </_.Title>
          <_.Title>
            <a href="#chart">ENTRY DSM</a>
          </_.Title>
          <_.Title>
            <a href="#introduce">PORTFOLIO</a>
          </_.Title>
          <_.Title>
            <a href="#developer">HISTORY</a>
          </_.Title>
          <_.Title>
            <a href="#qna">TEAM</a>
          </_.Title>
          <_.Title>
            <a href="#qna">MEMBER Q&A</a>
          </_.Title>
        </_.TitleContainer>
        <_.Button>지원하기</_.Button>
      </_.HeaderContainer>
  );
}

export default Header;
