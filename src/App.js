import SignIn from './components/SignIn';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';

function App() {
  const [user] = useAuthState(auth);
    return (
      <div className='max-h-screen max-w-screen overflow-hidden'>
        {user ? <Chat /> : <SignIn />}
        {/* <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/chat" element={<Chat />} />
        </Routes> */}
      </div>
    );
}

export default App;
