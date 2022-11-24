import './App.scss';
import Header from './components/header';
import SubHeader from './components/sub-header';
import Body from './components/body';
import Usecase from './components/use-case';
import Footer from './components/footer';
import Wallet from './components/wallet/wallet-connect';
import { useState } from 'react'

function App() {

  const [wallet, showWallet] = useState(false)

  const displayWallet = () => {
    showWallet(!wallet)
  }

  return (
    <div className="App">

      {wallet ? <Wallet /> : <div><Header control={displayWallet}/> <SubHeader /> <Body /> <Usecase /> <Footer /> </div>}

    </div>
  );
}

export default App;
