import React from 'react'
import { HiOutlineChat, HiOutlineSearch } from 'react-icons/hi';


function Chat() {
  return (
    <div className="p-5 w-screen h-screen bg-[#F5F7FB]">
      <div className="flex">
        <HiOutlineChat className="w-12 h-12" />
        <h1 className="mt-2 text-lg">Mystic_Chat</h1>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <div className="flex pl-2 m-5 w-[300px] h-9 rounded-full bg-white">
            <HiOutlineSearch className="mt-3" />
            <input className="mt-1 pl-1" placeholder='Search' type='text' />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Chat;