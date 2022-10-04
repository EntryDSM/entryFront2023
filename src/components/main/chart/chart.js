import * as _ from "../../../styles/main/chart.style";
import {StickLogo} from "./Logo";
function Chart() {
  return (
    <_.Container>
      <_.Title>졸업생 취업률</_.Title>
      <StickLogo />
      <_.ChartContainer>
        <_.RowBundle>
          <_.RowTitle>2021</_.RowTitle>
          <_.ChartStick color="#FF9B9F" width="742px">
            97.4%
          </_.ChartStick>
        </_.RowBundle>
        <_.RowBundle>
          <_.RowTitle>2020</_.RowTitle>
          <_.ChartStick color="#E4E4E4" width="705px">
            93.4%
          </_.ChartStick>
        </_.RowBundle>
        <_.RowBundle>
          <_.RowTitle>2019</_.RowTitle>
          <_.ChartStick color="#E4E4E4" width="685px">
            91.5%
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
export default Chart;
