import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { db, auth } from "../firebaseConfig";
import { collection, query, where, onSnapshot, addDoc, Timestamp, orderBy } from "firebase/firestore";
import User from './User';
import Messages from './Messages';
import Message from './Message';

function Chat() {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState('');
  const [text, setText] = useState('');
  const [ msgs, setMsgs] = useState([]);

  const user1 = auth.currentUser.uid;

  useEffect(() => {
    const usersRef = collection(db, 'users')
    const q = query (usersRef, where('uid', 'not-in', [user1]));
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

    const user2 = user.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
    
    const msgsRef = collection(db, 'messages', id, 'chat');
    const q = query(msgsRef, orderBy('createdAt', 'asc'));
    onSnapshot(q, querySnapshot => {
      let msgs = [];
      querySnapshot.forEach(doc => {
        msgs.push(doc.data())
      })
      setMsgs(msgs);
    }) 
  };

  console.log(msgs);

  const handleSubmit = async e => {
    e.preventDefault();
    const user2 = chat.uid;
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date())
    })
    setText('');
  };

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
              <div>
                {msgs.length ? msgs.map((msg, index) => <Message key={index} msg={msg} />) : null}
              </div>
              <Messages handleSubmit={handleSubmit} text={text} setText={setText} />
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