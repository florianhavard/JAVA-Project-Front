import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Title(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">{props.text}</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Title;