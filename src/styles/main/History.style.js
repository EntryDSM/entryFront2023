import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fffbfb;
`;

export const HistoryWrapper = styled.div`
  margin-left: 250px;
`;

export const HistoryTitle = styled.div`
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 28px;
  color: #343434;
`;

export const HistoryLine = styled.div`
  width: 100px;
  height: 2px;
  background: #f57278;
  border-radius: 100px;
  margin: 15px 0;
`;

export const HistoryExplain = styled.div`
  font-family: "NanumSquare_ac";
  width: 350px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #7a7a7a;
`;

export const Cards = styled.div`
  display: flex;
  width: 540px;
  height: 300px;
  margin-left: 143px;
  overflow: hidden;
`;

//카드
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 270px;
  height: 300px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;

export const CardWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 16px;
  left: 0px;
  top: 16px;
`;

export const Text = styled.div`
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 19px;
  color: #343434;
`;

export const CardLine = styled.div`
  width: 65px;
  height: 1px;
  border: 1px solid #343434;
  margin: 3px 0px;
`;

export const Img = styled.img`
  margin-top: 68px;
`;

export const CardContent = styled.div`
  margin-top: 15px;
  width: 230px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #343434;
`;
