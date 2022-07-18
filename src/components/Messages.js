import React from 'react';
import { IoSend } from "react-icons/io5";

function Messages() {
  return (
    <form className='flex mt-[50%]'>
        <div className='ml-3'>
            <input type="text" placeholder='Enter Message' className='w-[830px] h-8 rounded-full p-3' />
        </div>
        <div className=''>
            <IoSend className='w-7 h-7 ml-2 '/>
        </div>
    </form>
  )
}

export default Messages;