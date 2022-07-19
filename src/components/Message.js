import { useRef, useEffect } from 'react';
import Moment from 'react-moment';

function Message({ msg, user1, index}) {
    const scrollRef = useRef();

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msg]);
  return (
    <div
      className={`mt-2 ml-2 px-2 border max-w-[50%] rounded-md ${
        msg.from === user1 ? "text-right" : ""
      }`}
      ref={scrollRef}
    >
      <p
        className={`p-1 text-left font-semibold ${
          msg.from === user1 ? "bg-white" : "bg-gray-500"
        } `}
      >
        {msg.text}
        <br />
        <small className="">
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
      </p>
    </div>
  );
}

export default Message;