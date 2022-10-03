import * as _ from "../../../styles/main/QnA.style";
import InterView from "./InterView";
import { CancelLogo } from "./Logo";

const Modal = ({ setIsOpen }) => {
  return (
    <_.ModalBackground>
      <_.ModalContainer>
        <_.ModalWrapper>
          <_.QustionTitle>QUESTION</_.QustionTitle>
          <_.PinkLine></_.PinkLine>
          <_.QuestionSubTitle>EntryDSM을 만드시면서 어떤 기분이 드셨나요?</_.QuestionSubTitle>
        </_.ModalWrapper>
        <_.AnswerTitle>ANSWER</_.AnswerTitle>
        <_.InterViews>
          <InterView name="강석현" content="그냥 그런 기분이었습니다"></InterView>
          <InterView name="김의찬" content=""></InterView>
          <InterView name="이준서" content=""></InterView>
        </_.InterViews>
        <_.Cancel onClick={() => setIsOpen(false)}>
          <CancelLogo></CancelLogo>
        </_.Cancel>
      </_.ModalContainer>
    </_.ModalBackground>
  );
};

export default Modal;
