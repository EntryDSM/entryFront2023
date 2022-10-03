import * as _ from "../../../styles/main/QnA.style";

const InterView = ({ name, content }) => {
  return (
    <_.InterViewWrapper>
      <_.People>{name} :</_.People>
      <_.Content>{content}</_.Content>
    </_.InterViewWrapper>
  );
};

export default InterView;
