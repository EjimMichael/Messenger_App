import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { db, auth } from "../firebaseConfig";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import User from './User';

function Chat() {
  const [users, setUsers] = useState([]);
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
  console.log(users);
  return (
    <div className="w-screen h-screen bg-[#F5F7FB]">
      <NavBar />
      <div className="grid grid-cols-3">
        <div className="grid-cols-1 border-x-2 h-screen">
          {users.map((user) => (
            <User key={user.uid} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;