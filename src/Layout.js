import FighterCard from './FighterCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout() {
  return (
    <Container>
      <Row>
        <Col><FighterCard/></Col>
        <Col><FighterCard/></Col>
      </Row>
      <Row>
        <Col><FighterCard/></Col>
        <Col><FighterCard/></Col>
        <Col><FighterCard/></Col>
      </Row>
    </Container>
  );
}

export default Layout;