import { Box, Button } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Slideshow from './components/Slides';
import CountDown from './components/Countdown';
import SaveDate from './components/SaveDate';
import GroomBrideCard from './components/GroomBrideCard';
import GroomTeam from './components/GroomTeam';

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Slideshow />
        <CountDown />
        <SaveDate />
        <GroomBrideCard />
        <GroomTeam />
      </Box>
    </div>
  );
}

export default App;
