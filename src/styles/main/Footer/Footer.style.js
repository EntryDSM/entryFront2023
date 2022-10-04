import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 277px;
  background-color: #ff9b9f;
`;

export const InfoContainer = styled.div`
  position: absolute;
  width: 630px;
  height: 200px;
  left: 200px;
  margin-top: 20px;
`;

export const Entry = styled.div`
  color: #ffffff;
  font-weight: 700;
  font-size: 32px;
  font-family: "Noto Sans";
  font-style: normal;
  line-height: 40px;
`;

export const Text = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 36px;
  color: #ffffff;
`;

export const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 200px;
  margin-top: 40px;
`;

export const Text2 = styled(Text)`
  text-align: right;
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

export const Absolute = styled.a`
  position: absolute;
  right: 1px;
  bottom: 3px;
`;
