import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fffbfb;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
  margin-top: 60px;
`;

export const InterViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 500px;
  background-color: #ffffff;
`;

export const InterViewQs = styled.div`
  width: 800px;
  height: 360px;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 72px;
  border-top: 1px solid #e8e8e8;
  cursor: pointer;
`;

export const Number = styled.div`
  color: #ff9b9f;
  font-family: NanumSquare_ac;
  font-size: 25px;
  font-weight: 700;
  line-height: 28px;
`;

export const Text = styled.div`
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #343434;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0px 23px;
`;

//Modal Style

export const ModalBackground = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  border-radius: 5px;
  width: 850px;
  max-width: 850px;
  height: 500px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  z-index: 99;
  overflow: scroll;
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const QustionTitle = styled.div`
  margin-left: 45px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 24px;
  color: #343434;
`;

export const PinkLine = styled.div`
  background: #ff9b9f;
  border-radius: 100px;
  width: 2px;
  height: 16px;
  margin: 0 15px;
`;

export const QuestionSubTitle = styled.div`
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: #343434;
`;

export const Cancel = styled.div`
  position: absolute;
  right: 2%;
  top: 4%;
  cursor: pointer;
`;

export const AnswerTitle = styled.div`
  margin-top: 65px;
  margin-left: 45px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 24px;
  color: #343434;
`;

export const InterViews = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  width: 760px;
`;

export const InterViewWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 30px;
`;

export const People = styled.div`
  width: 70px;
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: #434343;
`;

export const Content = styled.div`
  font-family: "NanumSquare_ac";
  display: flex;
  width: 650px;
  flex-wrap: wrap;
  font-style: normal;
  margin-left: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #434343;
`;
