
import React from 'react';
import './App.css';
import {
  Card, Row, Col, ListGroup
} from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const [user, setDetails] = React.useState([]);
  const { id } = useParams();
  const [tracks, setTracks] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);

  const fetchArtistDetails = async () => {
    const response = await axios.get(`${process.env.REACT_APP_MAIN_URL}/artist/${id}`);
    const data = response.data;
    setDetails(data.user);
    setTracks(data.tracks);
    setAlbums(data.albums);
  }

  React.useEffect(() => {
    fetchArtistDetails()
  }, [])

  return (
    <div className="App">
      <h3 className='text-primary'>Welcome to the page of {user.name}</h3>
      <Row className='m-4'>
        <Col xs={12} md={8}>
          <Card className="bg-dark text-white">
            <Card.Img src={user.profilePicture} alt="" height={"400"} />
            <Card.ImgOverlay>
              <Card.Title>Artist Name: {user.name}</Card.Title>
              <Card.Text>Albums: {user.noOfAlbums}</Card.Text>
              <Card.Text>Fans: {user.noOfFans}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs={12} md={4} className='mt-4'>
          <h3>Top Tracks</h3>
          <ListGroup className='align-items-center' variant="flush" as="ol" numbered>
            {
              tracks.map((item, index) => {
                return (
                  <ListGroup.Item as="li" className='flex' key={`${item.name}-${index}`}>
                    {item.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.duration}
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
      <br />
      <h3>Albums</h3>
      <br />
      <Row xs={1} md={4} className="g-4">
        {albums.map((album, index) => (
          <Col key={`${album.name}-${index}`}>
            <Card>
              <Card.Img variant="top" src={album.cover} height={200} />
              <Card.Body>
                <Card.Title>{album.name}</Card.Title>
                <Card.Text>Year: 1990</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Artist;
