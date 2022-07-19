import React from "react";
import { IoSend } from "react-icons/io5";

function Messages({ handleSubmit, text, setText }) {
  return (
    <form onSubmit={handleSubmit} className="flex mt-[43%] fixed">
      <div className="ml-3">
        <input
          type="text"
          placeholder="Enter Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-[830px] h-9 rounded-md p-3"
        />
      </div>
      <div className="">
        <IoSend className="w-8 h-8 ml-2 " />
      </div>
    </form>
  );
}

export default Messages;
