import Card from "./Card";
import * as _ from "../../../styles/main/Developer/Developer.style";
import { LeftArrow, RightArrow } from "./Logo";
import { useCallback, useRef, useState } from "react";

const Developer = () => {
  const arr = [3, 2, 2, 1, 1];
  const [num, setNum] = useState(0);
  const pagingSlickRef = useRef(null);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    variableWidth: true,
  };

  const onClickPrev = useCallback(
    (ref) => () => {
      ref.current.slickPrev();
      setNum(num - 1);
      if (num === 0) {
        setNum(arr.length - 1);
      } else {
        setNum(num - 1);
      }
    },
    [num]
  );
  const onClickNext = useCallback(
    (ref) => () => {
      ref.current.slickNext();
      if (num === arr.length - 1) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
    },
    [num]
  );

  return (
    <_.DevContainer>
      <_.LeftHider></_.LeftHider>
      <_.RightHider></_.RightHider>
      <_.Title>Entry DSM 개발 인원</_.Title>
      <_.Line></_.Line>
      <_.Explain>Entry DSM을 개발한 인원들을 소개합니다</_.Explain>
      <_.Grade>{arr[num]}학년 인원</_.Grade>
      <_.StyledSlider {...settings} ref={pagingSlickRef}>
        <div>
          <_.Cards>
            <Card name="이서준" role="Back-End"></Card>
            <Card name="이승윤" role="Back-End"></Card>
            <Card name="김혜준" role="Front-End"></Card>
            <Card name="전규현" role="Front-End"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card name="김범진" role="Back-End"></Card>
            <Card name="정대현" role="Back-End"></Card>
            <Card name="이준서" role="Back-End"></Card>
            <Card name="오상우" role="Back-End"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card name="강석현" role="Front-End"></Card>
            <Card name="김의찬" role="Front-End"></Card>
            <Card name="이경수" role="Front-End"></Card>
            <Card name="조상현" role="Front-End"></Card>
            <Card name="손지원" role="Designer"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card name="김성원" role="Back-End"></Card>
            <Card name="김주영" role="Back-End"></Card>
            <Card name="김은빈" role="Back-End"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card name="장지성" role="Front-End"></Card>
            <Card name="정지관" role="Front-End"></Card>
            <Card name="김상구" role="Designer"></Card>
            <Card name="최승우" role="Designer"></Card>
          </_.Cards>
        </div>
      </_.StyledSlider>
      <_.DivPrev onClick={onClickPrev(pagingSlickRef)}>
        <LeftArrow></LeftArrow>
      </_.DivPrev>
      <_.Div onClick={onClickNext(pagingSlickRef)}>
        <RightArrow></RightArrow>
      </_.Div>
    </_.DevContainer>
  );
};

export default Developer;