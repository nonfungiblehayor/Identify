import './App.css';
import Header from './components/header'
import Universal from './components/universal'
import Faq from './components/faq'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />   
      <Universal sec='true' />
      <Faq />
      <Footer />   
    </div>
  );
}

export default App;
