import React, {Component} from 'react';
import {Button, Card, Row, Container, CardDeck} from 'react-bootstrap';

import data from '../data/data.json';
// import img1 from '../images/dj.jpg';
// import img2 from '../images/anu.jpg';


export default class BootCards extends Component{


render(){

    let dataVals = data.profile;
    // let profilepic = [img1, img2];

    return(
        <>
            <Container fluid={false}>

                <Row>


                    <CardDeck >
                        {
                            dataVals.map( (content, index) => (
                                    <Card key={index}>
                                       <Card.Img variant="top" src={content.basic.image} style={{width: "35%"}}/>
                                       <Card.Body>

                                            <Card.Title>
												{content.basic.name}
											</Card.Title>
											<Card.Subtitle>
												{content.basic.role}
											</Card.Subtitle>

											<Card.Text >
												{content.basic.phone}
											</Card.Text>
                                            <Card.Text >
												{content.basic.email}
											</Card.Text>

                                       </Card.Body>
                                        <Button>View Profile</Button>
                                    </Card>
                                )
                            )
                        }
                    </CardDeck>


                </Row>
            </Container>
       </>
    );

}

}