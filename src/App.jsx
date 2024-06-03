import './App.css';
import useWeb3 from './hooks/useWeb3';
import HomePage from './pages/Homepage';

function App() {
  const { signer, address } = useWeb3();

  const handleLogin = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen flex-col relative'>
      <HomePage />
      {address ? (
        <div className='absolute bg-white py-2 px-4 rounded-md'>{address}</div>
      ) : (
        <button className='absolute bg-white py-2 px-4 rounded-md' onClick={handleLogin}>Please login to your MetaMask wallet!</button>
      )}
    </div>
  )
}

export default App
