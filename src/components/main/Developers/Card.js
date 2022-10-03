import * as _ from "../../../styles/main/Developer/Card.style";

const Card = ({ name, role }) => {
  return (
    <_.Container>
      <_.Box></_.Box>
      <_.InfoWrapper>
        <_.Name>{name}</_.Name>
        <_.Line></_.Line>
        <_.Role>{role}</_.Role>
      </_.InfoWrapper>
    </_.Container>
  );
};

export default Card;
