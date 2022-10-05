import { useState } from "react";
import * as _ from "../../../styles/main/QnA.style";
import { MemberQnA, Question, Search, Stick } from "./Logo";
import Modal from "./Modal";

const QnA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [Name1, setName1] = useState("");
  const [Name2, setName2] = useState("");
  const [Name3, setName3] = useState("");
  const [firstContent, setFirstContent] = useState("");
  const [secondContent, setSecondContent] = useState("");
  const [thirdContent, setThirdContent] = useState("");

  const onClick = (q, f, s, t, c1, c2, c3) => {
    setIsOpen(!isOpen);
    setTitle(q);
    setName1(f);
    setName2(s);
    setName3(t);
    setFirstContent(c1);
    setSecondContent(c2);
    setThirdContent(c3);
  };

  return (
    <_.Container>
      <_.Wrapper>
        <Question></Question>
        <Stick></Stick>
        <MemberQnA></MemberQnA>
      </_.Wrapper>
      <_.InterViewContainer>
        <_.InterViewQs>
          <_.Line
            onClick={() =>
              onClick(
                "팀 엔트리는 본인에게 어떤 의미인가요?",
                "강석현",
                "오상우",
                "이준서",
                "무모한 도전을 할 용기를 주고 그 무모한 도전을 성공할 수 있게 해주는 고맙고 든든한 존재입니다.",
                "항상 새로운 것을 접할 기회를 제공해주는, 모험과도 같은 존재입니다.",
                "언제나 따라붙고 없으면 허전한 그림자 같은 존재입니다."
              )
            }
          >
            <_.QuestionWrapper>
              <_.Number>1.</_.Number>
              <_.Text>팀 엔트리는 본인에게 어떤 의미인가요?</_.Text>
            </_.QuestionWrapper>
            <_.QuestionWrapper>
              <Search></Search>
            </_.QuestionWrapper>
          </_.Line>
          <_.Line
            onClick={() =>
              onClick(
                "엔트리 팀에 합류한  계기는 무엇인가요?",
                "이경수",
                "조상현",
                "강석현",
                "확실한 결과물을 만들어낸 팀이기에 들어와서 성과를 보고 싶었습니다.",
                "엔트리라는 좋은 동아리라는 인식이 컸고, 실력이 부족한 저에게는 둘도 없는 기회여서 지원했습니다 !",
                "직접 사용해 본 서비스이기도 했고, 확실한 프로덕트, 확실한 사용자 그리고 가장 중요한 확실한 팀원이 있는 거 같아서 지원했고, 합류하게 되었습니다."
              )
            }
          >
            <_.QuestionWrapper>
              <_.Number>2.</_.Number>
              <_.Text>엔트리 팀에 합류한 계기는 무엇인가요?</_.Text>
            </_.QuestionWrapper>
            <_.QuestionWrapper>
              <Search></Search>
            </_.QuestionWrapper>
          </_.Line>
          <_.Line
            onClick={() =>
              onClick(
                "동아리 활동하면서 가장 뿌듯했던 순간은 언제인가요?",
                "김의찬",
                "이경수",
                "이준서",
                "처음으로 입학 전형시스템 코드를 제가 직접 짠 것이였습니다. 기능을 짜면서 어려운 부분을 하나씩 해결해 가며 내가 성장하고 있구나 느끼면서 뿌듯해 했던것 같습니다.",
                "저도 엔트리 랜딩페이지가 배포되었을 때인 것 같습니다. 맡은 부분은 크지 않았으나 협업을 통해 결과물을 만들었다는 점에서 인상깊이 남았습니다.",
                " 엔트리에서의 첫 코드리뷰가 가장 뿌듯했던거 같습니다. 실제로 프로젝트에 기여한다는 느낌을 받았거든요."
              )
            }
          >
            <_.QuestionWrapper>
              <_.Number>3.</_.Number>
              <_.Text>
                동아리 활동하면서 가장 뿌듯했던 순간은 언제인가요?
              </_.Text>
            </_.QuestionWrapper>
            <_.QuestionWrapper>
              <Search></Search>
            </_.QuestionWrapper>
          </_.Line>
          <_.Line
            onClick={() =>
              onClick(
                "엔트리의 자랑은 역시…?",
                "오상우",
                "이준서",
                "김의찬",
                "엔트리 팀원과 경험 기회라고 생각합니다. 함께 새로운 것을 배우고 가르쳐 주는 것에서 그치지 않고, 실제로 같이 사용해볼 수 있는 기회를 제공하는 멋진 동아리라고 생각합니다.",
                "제가 느낀 엔트리의 자랑은 도전에 있습니다. 과거의 틀에서 벗어나 언제나 새로운 시도를 하는 매력적인 동아리입니다.",
                "엔트리에 자랑은 엔트리 팀원들 입니다. 서로 알지 못했던 부분 어려운 부분을 함께 알려주기도 하고 배우기도 하며 서로 같이 성장할 수 있는 환경이 갖추워진것이 좋은 것 같습니다."
              )
            }
          >
            <_.QuestionWrapper>
              <_.Number>4.</_.Number>
              <_.Text>엔트리의 자랑은 역시…?</_.Text>
            </_.QuestionWrapper>
            <_.QuestionWrapper>
              <Search></Search>
            </_.QuestionWrapper>
          </_.Line>
          <_.Line
            onClick={() =>
              onClick(
                "엔트리 내에 선후배 사이는 어떤가요?",
                "조상현",
                "손지원",
                "오상우",
                "선후배 간의 좋은 멘토링과 지속적인 대화를 통해 많은 경험을 할 수 있는 것 같아서 좋았어요!!",
                "친근한 분위기로 선후배간의 무거운 느낌없이 서로서로 수평적인 분위기로 편안한 팀입니다.",
                "단체로 프로젝트를 진행하는 과정에서 일어나는 마찰을 잘 다뤄 주시는 분들이셨습니다. 취업을 하시고 교내를 떠나신 이후에도 질문을 할 때마다 신속한 속도로 답장을 주셨습니다. 가끔은 선배에게 만족할 만한 성과를 보여주지 못 한 것 같아, 더욱 더 열심히 공부 하게 되는 그런 관계에 있다고 생각합니다."
              )
            }
          >
            <_.QuestionWrapper>
              <_.Number>5.</_.Number>
              <_.Text>엔트리 내에 선후배 사이는 어떤가요?</_.Text>
            </_.QuestionWrapper>
            <_.QuestionWrapper>
              <Search></Search>
            </_.QuestionWrapper>
          </_.Line>
        </_.InterViewQs>
      </_.InterViewContainer>
      {isOpen ? (
        <Modal
          title={title}
          Name1={Name1}
          Name2={Name2}
          Name3={Name3}
          firstContent={firstContent}
          secondContent={secondContent}
          thirdContent={thirdContent}
          setIsOpen={setIsOpen}
        ></Modal>
      ) : null}
    </_.Container>
  );
};

export default QnA;
