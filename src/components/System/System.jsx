import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pump from '../../assets/pump.png';
import sun from '../../assets/sun.png';
import solarPanel from '../../assets/solar_panel.png';
import storageTank from '../../assets/storage_tank.png';

function System() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={sun} />
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={solarPanel} />
                </Col>
                <Col>
                    <img src={pump} />
                </Col>
                <Col>
                    <img src={storageTank} />
                </Col>
            </Row>
        </Container>
    )
};

export default System;