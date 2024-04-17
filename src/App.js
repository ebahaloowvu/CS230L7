import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  return (
    <div className="App">
    
      <Navbar />
        <h1>CS 230L</h1>
        <h2>Section - 01</h2>
        <p>WVU ID: 800416929</p>
        <p>Hi, I am Ehsan Bahaloo.</p>
        <Card title="Card 1" content="Content for Card 1" />
    </div>
  );
}

export default App;
