import styled from "styled-components";

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(100vh);
  padding-top: 60px;
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
