import React from 'react';

import NavBar from "./components/NavBar";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import marked from "marked";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markdown: '# Try me \n ## I work'
    };
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <Container>
        <NavBar />
        <Jumbotron style={{ paddingTop: "1rem" }}>
          <Row style={{ paddingBottom: "1rem" }}>
            <Col md={6}>
              <h1>Markdown</h1>
              <textarea onChange={(e) => this.handleChange(e)} value={this.state.markdown} rows="15" style={{ width: "100%", height: "100%", resize: "none" }} />
            </Col>
            <Col md={6}>
              <h1>Preview</h1>
              <div style={{ border: "1px solid black", height: "100%", padding: "1rem" }} dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
