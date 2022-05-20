import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../cardStyle.css";

export default function Home() {
  return (
    <>
      <Card className="Card">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>First React-bootstrap Card Components</Card.Title>
          <Card.Text>Go to About page</Card.Text>
          <Link to="/about">
            <Button variant="primary">Go About page</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
