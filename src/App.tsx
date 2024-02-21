import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Marc Madlangbayan
            </header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 400,
                                height: 600,
                                backgroundColor: "red"
                            }}
                        >
                            <h2>This is a header.</h2>
                            <ol>
                                <li>Uno</li>
                                <li>Dos</li>
                                <li>Tres</li>
                            </ol>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 400,
                                height: 600,
                                backgroundColor: "red"
                            }}
                        >
                            <img
                                style={{
                                    width: 300,
                                    height: 300
                                }}
                                src="https://www.rd.com/wp-content/uploads/2018/02/25_Hilarious-Photos-that-Will-Get-You-Through-the-Week_280228817_Doty911.jpg?fit=640%2C800"
                                alt="camel or llama picture, I'm not too sure"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
