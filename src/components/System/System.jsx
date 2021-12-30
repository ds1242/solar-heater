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
import './System.css';


function System() {
    let systemHeat = [systemInitial, systemHeat1, systemHeat2, tankHeat1, tankHeat2, tankHeat3, systemFinalState]
    let information = [
        'Sensor in the tank detects the temperature of the water has dropped',
        'Temperature change could be that new cold water is added after use or just after a certain amount of time', 
        'Pump turns on to begin moving water through the system again', 
        'Heat is collected from the solar panel and heats up the water',
        'The warm water mixes with the tank and starts to raise the temp of the tank',
        'Eventually the temperature rises to a specified level and sensor in the tank detects',
        'This turns the pump off and the system stops heating water (click the botton again to start over)'
    ]


    let interval = null;
    
    const [imageSource, setImageSource] = useState(systemHeat[0])
    const [informationArr, setInformationArr] = useState(information[0])

    // console.log(imageState.activeIndex)
    const changePicture = (event) => {
        event.preventDefault();
        let newIndex = 0

        interval = setInterval(() => {
            setImageSource(systemHeat[newIndex])
            setInformationArr(information[newIndex])
            console.log(newIndex)

            newIndex = newIndex  + 1
            if(newIndex === 7) {
                clearInterval(interval);
            }
        }, 1800)
        // setImageSource(sun);
    }
    
    return (
        <Container>
            <Row className='justify-content-center'>
                <Button onClick={changePicture} id='startButton'>Click Here For A High Level Explanation</Button>                
            </Row>
            <Row className='justify-content-center align-items-center'>               
                <Col id='infoSection'>
                    <h3 className='justify-content-center'>{informationArr}</h3>
                </Col>               
            </Row>
            <Row id='imageRow' className='justify-content-center'>                
                <Col>
                    <img src={imageSource} alt='images of system heating water and adding it to the tank'/>
                </Col>                
            </Row>
        </Container>
    )
};

export default System;