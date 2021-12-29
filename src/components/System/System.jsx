import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pump from '../../assets/pump.png';
import sun from '../../assets/sun.png';
import solarPanel from '../../assets/solar_panel.png';
import storageTank from '../../assets/storage_tank.png';

import systemInitial from '../../assets/initialSystemState.png';

function System() {



    return (
        <Container>
            <Row>
                
                <Col>
                    <img src={systemInitial} />
                </Col>
                
            </Row>
        </Container>
    )
};

export default System;