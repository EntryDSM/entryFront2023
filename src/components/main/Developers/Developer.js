import Card from "./Card";
import * as _ from "../../../styles/main/Developer/Developer.style";
import { LeftArrow, RightArrow } from "./Logo";
import { useCallback, useRef, useState } from "react";
import Entry31 from "../../../Assets/ProfileImg/3-1.jpg";
import Entry32 from "../../../Assets/ProfileImg/3-2.jpg";
import Entry33 from "../../../Assets/ProfileImg/3-3.jpg";
import Entry34 from "../../../Assets/ProfileImg/3-4.jpg";
import Entry35 from "../../../Assets/ProfileImg/3-5.jpg";
import Entry21 from "../../../Assets/ProfileImg/2-1.jpg";
import Entry22 from "../../../Assets/ProfileImg/2-2.jpg";
import Entry23 from "../../../Assets/ProfileImg/2-3.jpg";
import Entry24 from "../../../Assets/ProfileImg/2-4.jpg";
import Entry25 from "../../../Assets/ProfileImg/2-5.jpg";
import Entry26 from "../../../Assets/ProfileImg/2-6.jpg";
import Entry27 from "../../../Assets/ProfileImg/2-7.jpg";
import Entry28 from "../../../Assets/ProfileImg/2-8.jpg";
import Entry29 from "../../../Assets/ProfileImg/2-9.jpg";
import Entry11 from "../../../Assets/ProfileImg/1-1.jpg";
import Entry12 from "../../../Assets/ProfileImg/1-2.jpg";
import Entry13 from "../../../Assets/ProfileImg/1-3.jpg";
import Entry14 from "../../../Assets/ProfileImg/1-4.jpg";
import Entry15 from "../../../Assets/ProfileImg/1-5.jpg";
import Entry16 from "../../../Assets/ProfileImg/1-6.jpg";
import Entry17 from "../../../Assets/ProfileImg/1-7.jpg";

const Developer = () => {
  const arr = [3, 2, 2, 1, 1];
  const [num, setNum] = useState(0);
  const pagingSlickRef = useRef(null);
  const [throttle, setThrottle] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    variableWidth: true,
    draggable: false,
  };

  const onClickPrev = useCallback(
    (ref) => () => {
      if (throttle) return;
      if (!throttle) {
        setThrottle(true);
        setTimeout(async () => {
          ref.current.slickPrev();
          setNum(num - 1);
          if (num === 0) {
            setNum(arr.length - 1);
          } else {
            setNum(num - 1);
          }
          setThrottle(false);
        }, 500);
      }
    },
    [num]
  );
  const onClickNext = useCallback(
    (ref) => () => {
      if (throttle) return;
      if (!throttle) {
        setThrottle(true);
        setTimeout(async () => {
          ref.current.slickNext();
          if (num === arr.length - 1) {
            setNum(0);
          } else {
            setNum(num + 1);
          }
          setThrottle(false);
        }, 500);
      }
    },
    [num]
  );

  const Width = () => {
    return `${(window.screen.width - 875) / 2}px`;
  };

  return (
    <_.DevContainer>
      <_.LeftHider style={{ width: Width() }}></_.LeftHider>
      <_.RightHider style={{ width: Width() }}></_.RightHider>
      <_.Title>Entry DSM 개발 인원</_.Title>
      <_.Line></_.Line>
      <_.Explain>Entry DSM을 개발한 인원들을 소개합니다</_.Explain>
      <_.Grade>{arr[num]}학년 인원</_.Grade>
      <_.StyledSlider {...settings} ref={pagingSlickRef}>
        <div>
          <_.Cards>
            <Card img={Entry31} name="이서준" role="Back-End"></Card>
            <Card img={Entry32} name="이승윤" role="Back-End"></Card>
            <Card img={Entry33} name="김혜준" role="Front-End"></Card>
            <Card img={Entry34} name="전규현" role="Front-End"></Card>
            <Card img={Entry35} name="임서영" role="Designer"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry21} name="김범진" role="Back-End"></Card>
            <Card img={Entry22} name="정대현" role="Back-End"></Card>
            <Card img={Entry23} name="이준서" role="Back-End"></Card>
            <Card img={Entry24} name="오상우" role="Back-End"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry25} name="강석현" role="Front-End"></Card>
            <Card img={Entry26} name="김의찬" role="Front-End"></Card>
            <Card img={Entry27} name="이경수" role="Front-End"></Card>
            <Card img={Entry28} name="조상현" role="Front-End"></Card>
            <Card img={Entry29} name="손지원" role="Designer"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry11} name="김성원" role="Back-End"></Card>
            <Card img={Entry12} name="김주영" role="Back-End"></Card>
            <Card img={Entry13} name="김은빈" role="Back-End"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry14} name="장지성" role="Front-End"></Card>
            <Card img={Entry15} name="정지관" role="Front-End"></Card>
            <Card img={Entry16} name="김상구" role="Designer"></Card>
            <Card img={Entry17} name="최승우" role="Designer"></Card>
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
