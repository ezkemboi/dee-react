
import React from 'react';
import './App.css';
import {
  Button, Form, Card,
  Row, Col
} from 'react-bootstrap';
import json from './jj.json'

const App = () => {
  const [name, setName] = React.useState("");
  const [songs, setSongs] = React.useState([])
  const findTracks = () => {
    console.log(name) // send to AWS endpoints
    // name, duration - name of album
    console.log({ json })
    setSongs(json.data);
  }

  return (
    <div className="App">
      <h3>Welcome to App The Deezer</h3>
      <p>Helps you search for songs by your artist</p>
      <div className='form-control'>
        <Form.Control
          type="text"
          placeholder="search by artist"
          style={{
            display: 'flex',
            marginBottom: '5px',
            marginRight: '10px',
            padding: '5px'
          }}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="primary"
          style={{
            width: '20%',
          }}
          onClick={() => findTracks()}
        >
          Search
        </Button>
      </div>
      <Row xs={1} md={4} className="g-4">
          {
            songs.map((song, index) => {
                return (
                  <Col key={index}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={song.artist.picture_medium}
                        style={{
                          height: '200px'
                        }}
                      />
                      <Card.Body>
                        <Card.Text>{song.duration}</Card.Text>
                        <Card.Title>{song.title_short}</Card.Title>
                        <Card.Text>By {song.artist.name}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
            })
          }
      </Row>
    </div>
  );
}

export default App;
