import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        <Card title="Card 1" content="Content for Card 1" />
        <Card title="Card 2" content="Content for Card 2" />
        <Card title="Card 3" content="Content for Card 3" />
      </div>
      <h1>CS 230L</h1>
        <h2>Section - 01</h2>
        <p>WVU ID: 800416929</p>
        <p>Hi, I am Ehsan Bahaloo.</p>
    </div>
  );
}

export default App;
