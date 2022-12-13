import React, { useState } from "react";

import NavBar from "./components/NavBar";
import { Row, Col, Container } from "react-bootstrap";
import { Preview } from "./components/Preview";

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
      <div style={{ paddingTop: "1rem" }}>
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
            <Preview state={state} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
