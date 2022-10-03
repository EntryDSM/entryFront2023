import { useState } from "react";
import * as _ from "../../../styles/main/History.style";
import Card from "./Card";
import first from "../../../Assets/2016.jpg";
import second from "../../../Assets/2017.jpg";
import third from "../../../Assets/2018.jpg";
import fourth from "../../../Assets/2019.jpg";
import fifth from "../../../Assets/2020.jpg";
import six from "../../../Assets/2021.png";
import seven from "../../../Assets/2022.jpg";
import Left from "../../../Assets/LeftArrow.png";
import Right from "../../../Assets/RightArrow.png";

const History = () => {
  const [page, setPage] = useState(2);

  const Prev = () => {
    if (page === 1) {
      setPage(7);
      return;
    }
    setPage(page - 1);
  };

  const Next = () => {
    if (page === 7) {
      setPage(1);
      return;
    }
    setPage(page + 1);
  };

  return (
    <_.HistoryContainer>
      <_.HistoryWrapper>
        <_.HistoryTitle>Entry DSM의 역사...</_.HistoryTitle>
        <_.HistoryLine></_.HistoryLine>
        <_.HistoryExplain>
          약 5년 간 서비스를 제공해온 노하우를 바탕으로 EntryDSM은 지속적인 성장을 이뤄내고 있습니다.
        </_.HistoryExplain>
      </_.HistoryWrapper>
      <_.Cards>
        <Card
          imageUrl={first}
          year="2016"
          page={1}
          current={page}
          content="초대 교장선생님이신 최부영 선생님의 권유로 시작된 EntryDSM은
        2016년 V1을 출시하여 학생들이 프로덕션 환경의 시스템을 구현하고 운영하는 데 있어 전반적인 기반을 다졌습니다."
        ></Card>
        <Card
          imageUrl={second}
          year="2017"
          page={2}
          current={page}
          content="V1에서 수많은 학생과 교사분들께 받았던 피드백을 바탕으로 서비스 품질을 개선하기 위해 매진하였고, 이에 아키텍처 설계를고려하는 등 안정적인 시스템을 구현할 수 있도록 노력했습니다."
        ></Card>
        <Card
          imageUrl={third}
          year="2018"
          page={3}
          current={page}
          content="현업에서 자주 이용되는 기술 스택을 기반으로 시스템을 구성하여 사용자 UI, 원서 출력 기능 등 다양한 기능들을 안정적 이용과 성능 향상에 주력하여 시스템의 완성도를 높였습니다.
        "
        ></Card>
        <Card
          imageUrl={fourth}
          year="2019"
          page={4}
          current={page}
          content="V3 시스템의 성능 한계를 극복하기 위해 비동기 프로그래밍을 적용하였고, 실시간 시스템 모니터링 및 배포 파이프라인 구성으로 구성원의 작업 환경을 개선했습니다."
        ></Card>
        <Card
          imageUrl={fifth}
          year="2020"
          page={5}
          current={page}
          content="오랜 기간 서비스를 개발과 운영해온 경험을 살려 올해도 안정적으로 입학 전형 시스템을 제공합니다."
        ></Card>
        <Card
          imageUrl={six}
          year="2021"
          page={6}
          current={page}
          content="좀더 간편한 입학전형 시스템을 제공 해드리고 싶어서 새로운 마음으로 메인 컬러와 여러 기능을 개선하였습니다."
        ></Card>
        <Card
          imageUrl={seven}
          year="2022"
          page={7}
          current={page}
          content="좀 더 간편한 입학 전형 시스템을 제공해 드리고 싶어서 새로운 마음으로 메인 컬러와 여러 기능을 개선하였습니다."
        ></Card>
        <_.LeftArrow src={Left} onClick={Prev} />
        <_.RightArrow src={Right} onClick={Next} />
      </_.Cards>
    </_.HistoryContainer>
  );
};

export default History;
