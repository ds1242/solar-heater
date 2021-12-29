import React, { useState,  } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pump from '../../assets/pump.png';
import sun from '../../assets/sun.png';
import solarPanel from '../../assets/solar_panel.png';
import storageTank from '../../assets/storage_tank.png';

import systemInitial from '../../assets/initialSystemState.png';
import systemHeat1 from '../../assets/systemHeatingBegin.png';
import systemHeat2 from '../../assets/systemHeating2.png';
import tankHeat1 from '../../assets/tankHeating1.png';
import tankHeat2 from '../../assets/tankHeating2.png';
import tankHeat3 from '../../assets/tankHeating3.png';
import systemFinalState from '../../assets/systemFinalState.png';

function System() {
    let imageState = {
        systemHeat:[systemInitial, systemHeat1, systemHeat2, tankHeat1, tankHeat2, tankHeat3, systemFinalState],
        activeIndex: 0
    };
    
    const [imageSource, setImageSource] = useState(imageState.systemHeat[imageState.activeIndex])
    // console.log(imageState.activeIndex)
    const changePicture = (event) => {
        event.preventDefault();

        setInterval(() => {
            let newIndex = imageState.activeIndex + 1
            setImageSource(imageState.systemHeat[newIndex])
            console.log(newIndex)
        }, 1000)
        // setImageSource(sun);
    }
    
    return (
        <Container>
            <Row>
                
                <Col>
                    <img src={ imageSource } />
                </Col>
                
            </Row>
            <Row>
                <Button onClick={changePicture}>Click</Button>
                
            </Row>
        </Container>
    )
};

export default System;