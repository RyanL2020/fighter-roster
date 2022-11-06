import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FighterCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./fighterimage.png" />
      <Card.Body>
        <Card.Title>Fighter</Card.Title>
        <Card.Text>
          Greate fighter to watch!
        </Card.Text>
        <Button variant="primary">Fighter Bio</Button>
      </Card.Body>
    </Card>
  );
}

export default FighterCard;