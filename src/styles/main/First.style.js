import styled from "styled-components";
/**
 * Header 부분
 */
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 602px;
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
/**
 * Img 부분
 */
export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(100vh - 60px);
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => props.textSize};
  color: white;
  margin-bottom: ${(props) => props.textGap};
`;
export const BrText = styled.span`
  color: ${(props) => props.textColor};
`;
export const BgImg = styled.img`
  z-index: -1;
  position: absolute;
  width: 100vw;
  height: calc(100vh - 60px);
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
