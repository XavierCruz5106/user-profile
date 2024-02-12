import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const Interests = () => {
  return (
    <Container>
      <ListGroup.Item variant="dark">Interests</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Computer Science
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        Art
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Cyber Security
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
        Scaring Children
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Doing Math
      </ListGroup.Item>
    </Container>
  );
};

export default Interests;
