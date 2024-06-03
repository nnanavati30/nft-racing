import './App.css';
import useWeb3 from './hooks/useWeb3';
import HomePage from './pages/Homepage';

function App() {
  const { signer, address } = useWeb3();

  return (
    <div className='flex items-center justify-center min-h-screen flex-col relative'>
      <HomePage />
      <div className='absolute bg-white p-2 rounded-md'>{address}</div>
    </div>
  )
}

export default App
