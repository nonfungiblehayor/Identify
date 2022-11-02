import './App.css';
import Header from './components/header'
import Universal from './components/universal'

function App() {
  return (
    <div className="App">
      <Header />   
      <Universal sec='true' />   
    </div>
  );
}

export default App;
