import './App.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Body from './components/body';
import Usecase from './components/use-case';


function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Body />
      <Usecase />
    </div>
  );
}

export default App;
