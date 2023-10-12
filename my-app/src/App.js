import "./App.css";
import {
  Navbar,
  Button,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Alison Colao</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={6}>
              <Image src="assets/headshot.jpg" 
              fluid 
              rounded 
              />
            </Col>
            <Col sm={6}>
              <h1 className="font-weight-light">About Me</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                natus voluptate qui assumenda tempora nemo cupiditate, iste hic
                voluptatibus sint placeat alias culpa unde inventore officiis,
                magnam facere. Earum, laborum?
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="assets/feedme.png"
                  fluid
                  height="191px"
                />
                <Card.Body>
                  <Card.Title>FeedMe</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    href="https://epicasino.github.io/Feed-Me/"
                    variant="secondary"
                  >
                    Go to FeedMe
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="assets/daytrip.png"
                  height="191px"
                />
                <Card.Body>
                  <Card.Title>DayTripper</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    href="https://daytripper-app-1577e78f3877.herokuapp.com/"
                    variant="secondary"
                  >
                    Go to Daytripper
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="assets/planner.jpg" />
                <Card.Body>
                  <Card.Title>Planner</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    href="https://acolao.github.io/Work-Day-Scheduler/"
                    variant="secondary"
                  >
                    Go to Workday Scheduler
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="assets/password.png" />
                <Card.Body>
                  <Card.Title>Password Generator</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    href="https://acolao.github.io/Password-JavaScript/"
                    variant="secondary"
                  >
                    Go to Password Generator
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; Alison Colao 2023
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
