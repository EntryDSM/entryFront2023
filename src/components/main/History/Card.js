import * as _ from "../../../styles/main/History.style";
import first from "../../../Assets/2016.jpg";

const Card = ({ imageUrl, year, page, content }) => {
  return (
    <_.CardContainer>
      <_.CardWrapper>
        <_.Text>{year}</_.Text>
        <_.CardLine></_.CardLine>
        <_.Text>{page}장</_.Text>
      </_.CardWrapper>
      <_.Img src={imageUrl}></_.Img>
      <_.CardContent>{content}</_.CardContent>
    </_.CardContainer>
  );
};

export default Card;
