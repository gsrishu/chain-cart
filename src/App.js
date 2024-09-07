import './App.css';
import React, { useState } from 'react';
import { BrowserProvider } from 'ethers';
function App() {
  const [walletAddress, setWalletAddress] = useState('')
  const connectWallet = async () => {
    console.log("Button clicked!")
    console.log(window.ethereum)


    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        console.log("provider", provider)
        await provider.send('eth_requestAccounts', [])
        const signer = await provider.getSigner()
        const address = signer.address
        setWalletAddress(address)
      } catch (error) {

        console.error('error in connection wallet', error)
      }
    } else {
      alert('Please Install a wallet extemsion like metamask or Phantom')
    }

  }
  return (
    <div className="App">
      <p>connect Wallet</p>
      <button onClick={connectWallet}>Connect Wallet</button>
      <input type="numer" placeholder='Amount in USDC' />
      {walletAddress && <p>Connected:{walletAddress}</p>}
      <button>Pay Now</button>
    </div>
  );
}

export default App;
