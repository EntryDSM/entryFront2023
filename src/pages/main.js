import Footer from "../components/Footer/Footer";
import First from "../components/main/First";
import QnA from "../components/main/QnA/QnA";
import Second from "../components/main/Second";
import Third from "../components/main/Third";
import * as _ from "../styles/main.style";

function Main() {
  return (
    <_.Container>
      <First />
      <Second />
      <Third />
      <QnA></QnA>
      <Footer></Footer>
    </_.Container>
  );
}

export default Main;
