import First from "../components/main/First";
import Second from "../components/main/Second";
import Third from "../components/main/Third";
import * as _ from "../styles/main.style";

function Main() {
  return (
    <_.Container>
      <First />
      <Second />
      <Third />
    </_.Container>
  );
}

export default Main;
