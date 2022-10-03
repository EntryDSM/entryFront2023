import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 270px;
  height: 160px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(245, 114, 120, 0.4);
  border-radius: 5px;
`;

export const Box = styled.div`
  width: 140px;
  height: 140px;
  margin-left: 10px;
  margin-top: 10px;
  background: #f0f0f0;
  border-radius: 5px;
`;

export const InfoWrapper = styled.div`
  width: 85px;
  height: 55px;
  margin-left: 17px;
  margin-top: 53px;
`;

export const Name = styled.div`
  font-family: "NanumSquare_ac";
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 23px;
  color: #343434;
`;

export const Line = styled.div`
  width: 30px;
  height: 1px;
  background: #e8e8e8;
  border-radius: 100px;
  margin: 4px 0px;
`;

export const Role = styled.div`
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 19px;
  line-height: 21px;
  color: #7a7a7a;
`;
