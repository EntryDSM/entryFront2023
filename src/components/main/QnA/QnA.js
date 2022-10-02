import * as _ from "../../../styles/main/QnA.style";
import { MemberQnA, Question, Search, Stick } from "./Logo";

const QnA = () => {
  return (
    <_.Container>
      <_.Wrapper>
        <Question></Question>
        <Stick></Stick>
        <MemberQnA></MemberQnA>
      </_.Wrapper>
      <_.InterViewContainer>
        <_.InterViewQs>
          <_.Line>
            <_.QuestionWrapper>
              <_.Number>1.</_.Number>
              <_.Text>EntryDSM을 만드시면서 어떤 기분이 들으셨나요?</_.Text>
            </_.QuestionWrapper>
            <_.QuestionWrapper>
              <Search></Search>
            </_.QuestionWrapper>
          </_.Line>
          <_.Line></_.Line>
          <_.Line></_.Line>
          <_.Line></_.Line>
          <_.Line></_.Line>
        </_.InterViewQs>
      </_.InterViewContainer>
    </_.Container>
  );
};

export default QnA;
