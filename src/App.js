
import './App.css';
import { Button, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h3>Welcome to App The Deezer</h3>
      <p>Helps you search for songs by your artist</p>
      <div>
        <Form.Control
          type="text"
          placeholder="search by artist"
          style={{
            marginRight: '10px',
            padding: '5px'
          }} 
        />
        <Button
          variant="primary"
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default App;
