import * as _ from "../../../styles/main/History.style";

const Card = ({ imageUrl, year, page, content, current, opacity }) => {
  function getZindex() {
    if (page === current) {
      return 2;
    }
    if (page === current - 1 || page === current + 1) {
      return 1;
    }
    return 0;
  }
  function getMargin() {
    if (page === current) {
      return "0px";
    }
    if (page === current + 1 || current - page === 6) {
      return "-270px";
    }
    if (page === current - 1 || page - current === 6) {
      return "270px";
    }
  }

  function getOpcacity() {
    if (page !== current) {
      return "0.7";
    }
  }

  function getColor() {
    if (page !== current) {
      return "rgba(0, 0, 0, 0.15)";
    }
  }

  return (
    <_.CardContainer
      style={{ backgroundColor: getColor(), opacity: getOpcacity(), zIndex: getZindex(), marginRight: getMargin() }}
    >
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
