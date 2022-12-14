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
import Entry14 from "../../../Assets/ProfileImg/1-4.svg";
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
      <_.Title>Entry DSM ?????? ??????</_.Title>
      <_.Line></_.Line>
      <_.Explain>Entry DSM??? ????????? ???????????? ???????????????</_.Explain>
      <_.Grade>{arr[num]}?????? ??????</_.Grade>
      <_.StyledSlider {...settings} ref={pagingSlickRef}>
        <div>
          <_.Cards>
            <Card img={Entry31} name="?????????" role="Back-End"></Card>
            <Card img={Entry32} name="?????????" role="Back-End"></Card>
            <Card img={Entry33} name="?????????" role="Front-End"></Card>
            <Card img={Entry34} name="?????????" role="Front-End"></Card>
            <Card img={Entry35} name="?????????" role="Designer"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry21} name="?????????" role="Back-End"></Card>
            <Card img={Entry22} name="?????????" role="Back-End"></Card>
            <Card img={Entry23} name="?????????" role="Back-End"></Card>
            <Card img={Entry24} name="?????????" role="Back-End"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry25} name="?????????" role="Front-End"></Card>
            <Card img={Entry26} name="?????????" role="Front-End"></Card>
            <Card img={Entry27} name="?????????" role="Front-End"></Card>
            <Card img={Entry28} name="?????????" role="Front-End"></Card>
            <Card img={Entry29} name="?????????" role="Designer"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry11} name="?????????" role="Back-End"></Card>
            <Card img={Entry12} name="?????????" role="Back-End"></Card>
            <Card img={Entry13} name="?????????" role="Back-End"></Card>
          </_.Cards>
        </div>
        <div>
          <_.Cards>
            <Card img={Entry14} name="?????????" role="Front-End"></Card>
            <Card img={Entry15} name="?????????" role="Front-End"></Card>
            <Card img={Entry16} name="?????????" role="Designer"></Card>
            <Card img={Entry17} name="?????????" role="Designer"></Card>
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
