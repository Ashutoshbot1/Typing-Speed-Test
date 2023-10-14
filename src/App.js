
import './App.css';
import Buttons from './Componenets/Buttons';
import Footer from './Componenets/Footer';
import InputBox from './Componenets/InputBox';
import Timer from './Componenets/Timer';
import TitleSignup from './Componenets/TitleSignup.js';

function App() {
  return (
    <div className="App container my-5">
      <TitleSignup/>
      <Timer/>
      <InputBox/>
      <Buttons/>
      <Footer/>
    </div>
  );
}

export default App;
