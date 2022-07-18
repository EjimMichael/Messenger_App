import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { db, auth } from "../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import User from './User';
import Messages from './Messages';

function Chat() {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState('');
  useEffect(() => {
    const usersRef = collection(db, 'users')
    const q = query (usersRef, where('uid', 'not-in', [auth.currentUser.uid]));
    const unsub = onSnapshot(q, querySnapshot => {
      let users = [];
      querySnapshot.forEach(doc => {
        users.push(doc.data())
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);
  
  const selectUser = (user) => {
    setChat(user);
    console.log(user)
  }
  return (
    <div className="w-screen h-screen bg-[#F5F7FB] overflow-hidden">
      <NavBar />
      <div className="grid grid-cols-3">
        <div className="grid-cols-1 border-x-2 h-screen">
          {users.map((user) => (
            <User key={user.uid} user={user} selectUser={selectUser} />
          ))}
        </div>

        <div className="grid-cols-2 w-[200%]">
          {chat ? (
            <>
              <div className="border-b-2">
                <h3 className="p-3 text-xl">{chat.name}</h3>
              </div>
              <Messages />
            </>
          ) : (
            <h3 className="text-2xl text-gray-600 text-center mt-[25%]">
              Select a user to start a conversation
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;