import * as _ from "../../styles/main/Second.style";
function Second() {
  return (
    <_.Container>
      <_.Title>졸업생 취업률</_.Title>
      <StickLogo />
      <_.ChartContainer>
        <_.RowBundle>
          <_.RowTitle>2022</_.RowTitle>
          <_.ChartStick color="#FF9B9F" width="742px">
            98%
          </_.ChartStick>
        </_.RowBundle>
        <_.RowBundle>
          <_.RowTitle>2021</_.RowTitle>
          <_.ChartStick color="#E4E4E4" width="690px">
            84%
          </_.ChartStick>
        </_.RowBundle>
        <_.RowBundle>
          <_.RowTitle>2020</_.RowTitle>
          <_.ChartStick color="#E4E4E4" width="705px">
            89%
          </_.ChartStick>
        </_.RowBundle>
        <_.RowBundle>
          <_.RowTitle>2019</_.RowTitle>
          <_.ChartStick color="#E4E4E4" width="722px">
            90%
          </_.ChartStick>
        </_.RowBundle>
        <_.ChartBgContainer>
          <_.ChartBg />
          <_.ChartBg />
          <_.ChartBg />
          <_.ChartBg />
          <_.ChartBg />
        </_.ChartBgContainer>
      </_.ChartContainer>
    </_.Container>
  );
}
export function StickLogo() {
  return (
    <svg
      width="60"
      height="2"
      viewBox="0 0 60 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginTop: "40px", marginBottom: "40px" }}
    >
      <rect width="60" height="2" rx="1" fill="#F57278" />
    </svg>
  );
}
export default Second;
