import Footer from "../components/main/Footer/Footer";
import Developer from "../components/main/Developers/Developer";
import Home from "../components/main/Home/Home";
import QnA from "../components/main/QnA/QnA";
import Chart from "../components/main/chart/chart";
import Introduce from "../components/main/introduce/introduce";
import * as _ from "../styles/main.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/main/Header/Header";

function Main() {
  return (
    <div style={{"scroll-"}}>
        <Header/>
      <div id="home"><Home/></div>
      <div id="chart"><Chart id="chart"/></div>
      <div id="introduce"><Introduce id="introduce"/></div>
      <div id="developer"><Developer id="developer"/></div>
      <div id="qna"><QnA/></div>
      <Footer/>
    </div>
  );
}

export default Main;
