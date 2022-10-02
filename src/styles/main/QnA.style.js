import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fffbfb;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
