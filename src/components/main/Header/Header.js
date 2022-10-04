import * as _ from "../../../styles/main/Header/Header.style";
import { EntryLogo, HeaderStickLogo } from "./Logo";

function Header() {
  return (
      <_.HeaderContainer>
        <EntryLogo />
        <HeaderStickLogo />
        <_.TitleContainer>
          <_.Title>
            <a href="#home">ENTRY DSM</a>
          </_.Title>
          <_.Title>
            <a href="#chart">EMPLOYMENT</a>
          </_.Title>
          <_.Title>
            <a href="#introduce">INTRODUCE</a>
          </_.Title>
          <_.Title>
            <a href="#history">HISTORY</a>
          </_.Title>
          <_.Title>
            <a href="#developer">TEAM</a>
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
