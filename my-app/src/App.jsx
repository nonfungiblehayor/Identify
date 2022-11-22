import './App.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Body from './components/body';
import Usecase from './components/use-case';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Body />
      <Usecase />
      <Footer />
    </div>
  );
}

export default App;
