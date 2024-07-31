import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import Random from './components/random_color';
import StarRating from './components/star';
import Image from './components/Image_Slider';
import QRCode from './components/qr-code';
import Board from './components/Tic_Tac_toe';
function App() {
  return (
    <div className="App">
     
   {/* <Accordian/>
    <Random/> */}
    {/* <StarRating/> */}
    {/* <Image url={"https://picsum.photos/v2/list?page=1&limit=10"} page={"1"} limit={"10"}/> */}
    {/* <QRCode/> */}
    
    <Board/>
    </div>
  );
}

export default App;
