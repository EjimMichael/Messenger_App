import SignIn from './components/SignIn';
import { Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';


function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    );
}

export default App;
