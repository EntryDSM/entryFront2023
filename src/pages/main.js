import Footer from "../components/Footer/Footer";
import Developer from "../components/main/Developers/Developer";
import First from "../components/main/First";
import QnA from "../components/main/QnA/QnA";
import Second from "../components/main/Second";
import Third from "../components/main/Third";
import * as _ from "../styles/main.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
  return (
    <_.Container>
      <First />
      <Second />
      <Third />
      <Developer></Developer>
      <QnA></QnA>
      <Footer></Footer>
    </_.Container>
  );
}

export default Main;
