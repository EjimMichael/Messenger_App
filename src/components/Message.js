import { useRef, useEffect } from 'react';
import Moment from 'react-moment';

function Message({ msg, user1, index}) {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msg]);
  return (
    <div
      className={`mt-2 ml-2 border w-[40%] ${msg.from === user1 ? "" : ""}`}
      //   ref={scrollRef}
    >
      <p
        className={`px-3 py-1 rounded-lg font-semibold ${
          msg.from === user1 ? "bg-blue-500" : "bg-gray-400"
        } `}
      >
        {msg.text}
        <br />
        <small className="text-xs">
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </div>
  );
}

export default Message;