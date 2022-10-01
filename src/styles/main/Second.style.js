import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fbfbfb")};
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: ${(props) => (props.size ? props.size : "28px")};
  line-height: 28px;
`;
/**
 * Chart
 */
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 24px;
`;
export const ChartBgContainer = styled.div`
  display: flex;
  width: 742px;
  position: absolute;
  left: 65px;
  z-index: -99;
`;
export const ChartBg = styled.div`
  width: 150px;
  height: 280px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #e2e2e2;
`;
export const RowBundle = styled.div`
  display: flex;
  align-items: center;
`;
export const RowTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #343434;
  margin-right: 16px;
`;
export const ChartStick = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 0px 1000px 1000px 0px;
  width: ${(props) => props.width};
  height: 40px;
  text-align: right;
  padding-right: 20px;
  padding-top: 10px;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 21px;
`;
