import React, { useState } from "react";

import NavBar from "./components/NavBar";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import marked from "marked";

const App = () => {
  const [state, setState] = useState(`# Try me \n ## I work \n
  - lists \n - are \n - nice \n\n **Bold** \n\n *italic*\n
 | one   | two   | three |\n |-------|-------|-------|\n | value  | value  | value  | \n `);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(event.target.value);
  };

  return (
    <Container>
      <NavBar />
      <Jumbotron style={{ paddingTop: "1rem" }}>
        <Row style={{ paddingBottom: "1rem" }}>
          <Col md={6}>
            <h1>Markdown</h1>
            <textarea
              onChange={(e) => onChange(e)}
              value={state}
              rows={15}
              style={{ width: "100%", height: "100%", resize: "none" }}
            />
          </Col>
          <Col md={6}>
            <h1>Preview</h1>
            <div
              style={{
                border: "1px solid black",
                height: "100%",
                padding: "1rem",
              }}
              dangerouslySetInnerHTML={{
                __html: marked(state),
              }}
            />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default App;
