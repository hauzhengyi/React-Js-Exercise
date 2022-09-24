import logo from './logo.svg';
import './App.css';
import Learn from './components/Hello'
import Bye from './components/Bye';
import Hook from './components/Hook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Learn name='Xin Hui'/>
        <Bye name='Zheng Yi'/>
        <Hook/>
      </header>
    </div>
  );
}

export default App;
