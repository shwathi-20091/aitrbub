
import './App.css';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Card from './Card.js';
import carl from './carl.png';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Card 
     img={carl}
     rating="5.0"
     review="(6)"
     country="USA"
     title="Life lessons with Katie Zaferes"
     price="130"/>
    </div>
  );
}

export default App;
