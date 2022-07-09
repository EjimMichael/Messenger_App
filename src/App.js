import './App.css';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-200 grid place-items-center">
      <h1 className='text-center text-2xl pt-3'>Mystic Messenger</h1>
      <SignIn />
    </div>
  );
}

export default App;
