import Developer from "../components/main/Developers/Developer";
import Home from "../components/main/Home/Home";
import QnA from "../components/main/QnA/QnA";
import Chart from "../components/main/chart/chart";
import Introduce from "../components/main/introduce/introduce";
import * as _ from "../styles/main.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/main/Header/Header";
import Footer from "../components/Footer/Footer";
import History from "../components/main/History/History";

function Main() {
  return (
    <_.Container>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="chart">
        <Chart/>
      </div>
      <div id="introduce">
        <Introduce/>
      </div>
        <div id="history">
            <History/>
        </div>
      <div id="developer">
        <Developer/>
      </div>
      <div id="qna">
        <QnA />
      </div>
      <Footer />
    </_.Container>
  );
}

export default Main;
