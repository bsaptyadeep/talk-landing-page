import './App.css';
import Logo from './assets/images/talkitive.ai.png';
import AddEmail from './components/AddEmail';
import LinearGradientImage from './assets/images/Gradient bg.png';

function App() {
  return (
    <div className="App">
      <div className='sectionOne'>
        <img className="gradientPattern" src={LinearGradientImage} />
        <img className="mainLogo" src={Logo} height={90} alt="talkitive ai logo" />
        <h1>GenAI Customer Support</h1>
        <div className="addEmailContainer">
          <p>Please submit your email to join our Waitlist.</p>
          <AddEmail />
        </div>
      </div>
    </div>
  );
}

export default App;
