import styled from "styled-components";
import Slick from "react-slick";

export const DevContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
`;

export const Cards = styled.div`
  display: grid;
  margin-left: 5px;
  margin-top: 240px;
  width: 870px;
  height: 340px;
  grid-template-columns: repeat(3, 2fr);
  gap: 10px;
`;

export const Title = styled.div`
  position: absolute;
  /* width: 227px; */
  /* height: 28px; */
  left: 250px;
  margin-top: 78px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 28px;
  color: #343434;
`;

export const Line = styled.div`
  position: absolute;
  width: 150px;
  height: 1px;
  left: 250px;
  margin-top: 121px;
  background: #e8e8e8;
  border-radius: 100px;
`;

export const Explain = styled.div`
  position: absolute;
  /* width: 335px; */
  /* height: 22px; */
  left: 250px;
  margin-top: 137px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: #7a7a7a;
`;

export const Grade = styled.div`
  position: absolute;
  left: 250px;
  margin-top: 170px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 31px;
  color: #242424;
`;

//Slick
export const StyledSlider = styled(Slick)`
  width: 100vw;
  text-align: center;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const Div = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 99;
  text-align: center;
  line-height: 30px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
  right: 200px;
  margin-top: 390px;
  cursor: pointer;
`;

export const DivPrev = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 99;
  text-align: center;
  line-height: 30px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
  left: 200px;
  margin-top: 390px;
  cursor: pointer;
`;

export const Hider = styled.div`
  position: absolute;
  margin-top: 230px;
  width: 19.8%;
  height: 360px;
  background-color: #ffffff;
  z-index: 99;
`;

export const LeftHider = styled(Hider)`
  left: 0;
`;

export const RightHider = styled(Hider)`
  right: 0;
`;
