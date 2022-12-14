import { useEffect } from "react";
import * as _ from "../../../styles/main/QnA.style";
import InterView from "./InterView";
import { CancelLogo } from "./Logo";

const Modal = ({ setIsOpen, title, Name1, Name2, Name3, firstContent, secondContent, thirdContent }) => {
  const onClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <_.ModalBackground>
      <_.Back onClick={onClick}></_.Back>
      <_.ModalContainer>
        <_.ModalWrapper>
          <_.QustionTitle>QUESTION</_.QustionTitle>
          <_.PinkLine></_.PinkLine>
          <_.QuestionSubTitle>{title}</_.QuestionSubTitle>
        </_.ModalWrapper>
        <_.AnswerTitle>ANSWER</_.AnswerTitle>
        <_.InterViews>
          <InterView name={Name1} content={firstContent}></InterView>
          <InterView name={Name2} content={secondContent}></InterView>
          <InterView name={Name3} content={thirdContent}></InterView>
        </_.InterViews>
        <_.Cancel
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <CancelLogo></CancelLogo>
        </_.Cancel>
      </_.ModalContainer>
    </_.ModalBackground>
  );
};

export default Modal;
