import * as _ from "../../../styles/main/home.js";
import {BgImg, BgStick} from "./Logo"

function Home() {
  return (
      <_.BgContainer>
          <_.Text textSize="30px" textGap="20px">
              대덕 <_.BrText textColor="#F57278">소프트웨어</_.BrText> 마이스터
              고등학교
          </_.Text>
          <BgStick />
          <_.Text textSize="25PX" textGap="20px">
              <_.BrText textColor="#F57278">입학전형 </_.BrText>
              시스템
          </_.Text>
          <_.Text textSize="60px" textGap="15px">
              <_.BrText textColor="#F57278">E</_.BrText>ntry
              <_.BrText textColor="#FF9B9F"> DSM</_.BrText>
          </_.Text>
          <BgImg />
      </_.BgContainer>
  );
}


export default Home;
