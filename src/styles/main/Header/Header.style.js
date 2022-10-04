import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  position: fixed;
  background-color: white;
  z-index: 100;
  width: 100vw;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
`;
export const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #242424;
`;
export const Button = styled.button`
  width: 90px;
  height: 36px;
  border: 0;
  margin-left: 224px;
  background: #f57278;
  border-radius: 1000px;
  color: white;
  outline: none;
`;
