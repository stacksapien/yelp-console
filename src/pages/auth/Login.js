import { Card, Form, Button, Row, Col } from "react-bootstrap";
export default function SignUp() {
  return (
    <div style={{ height: "100vh" }} className="auth-background">
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Card className="mt-4">
            <Card.Img
              variant="top"
              style={{
                height: "auto",
              }}
              src="https://images.unsplash.com/photo-1713430360082-2efa39089532?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Sign Up</Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                Please enter your details to sign up
              </Card.Text>
              <Form>
                <Form.Group>
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control type="email" placeholder="test@example.com" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
              </Form>
              <Button className="mt-4" variant="primary">
                Register
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
}
