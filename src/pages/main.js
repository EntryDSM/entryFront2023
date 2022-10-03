import Footer from "../components/Footer/Footer";
import Developer from "../components/main/Developers/Developer";
import First from "../components/main/First";
import QnA from "../components/main/QnA/QnA";
import Second from "../components/main/Second";
import Third from "../components/main/Third";
import History from "../components/main/History/History";
import * as _ from "../styles/main.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helmet from "react-helmet";

function Main() {
  return (
    <_.Container>
      <Helmet>
        <title>Entry DSM</title>
      </Helmet>
      <First />
      <Second />
      <Third />
      <History></History>
      <Developer></Developer>
      <QnA></QnA>
      <Footer></Footer>
    </_.Container>
  );
}

export default Main;
