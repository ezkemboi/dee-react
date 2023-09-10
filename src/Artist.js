
import React from 'react';
import './App.css';
import {
  Card, Row, Col, ListGroup
} from 'react-bootstrap';
import axios from 'axios';

const mainUrl = 'https://1oao1w4nxj.execute-api.eu-west-2.amazonaws.com'

const Artist = () => {
  const [name, setName] = React.useState("");
  const [songs, setSongs] = React.useState([])
  const findTracks = async () => {
    const response = await axios.get(`${mainUrl}/artists?artistName=${name}`)
    console.log({ response })
    setSongs(response.data);
  }

  return (
    <div className="App">
      <Row>
        <Col xs={12}>
          <Card className="bg-dark text-white">
            <Card.Img src="holder.js/100px270" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Artist;
