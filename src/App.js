import SignIn from './components/SignIn';
import { Routes, Route } from 'react-router-dom';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';

function App() {
  const [user] = useAuthState(auth);
    return (
      <div>
        {user ? <Chat /> : <SignIn />}
        {/* <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/chat" element={<Chat />} />
        </Routes> */}
      </div>
    );
}

export default App;
