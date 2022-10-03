import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  gap: 40px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 280px;
  height: 290px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 25px;
`;
export const Text = styled.textarea`
  border: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: 230px;
  height: 300px;
  resize: none;
  outline: none;
`;
