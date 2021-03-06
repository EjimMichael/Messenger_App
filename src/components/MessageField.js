import React from "react";
import { IoSend } from "react-icons/io5";

function MessageField({ handleSubmit, text, setText }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex mt-[43%] absolute inset-x-0 bottom-[18%]"
    >
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

export default MessageField;
