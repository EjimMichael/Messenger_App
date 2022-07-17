import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";

function User({ user }) {
  return (
    <div>
      <div className="flex pl-2 pb-1 m-5 w-[300px] h-10 rounded-full bg-white">
        <HiOutlineSearch className="mt-3" />
        <input className="mt-1 pl-1" placeholder="Search" type="text" />
      </div>
      <div className='flex cursor-pointer m-auto'>
        <img
          src={user.avatar || user?.reloadUserInfo?.photoURL}
          className="w-10 h-10 ml-2 border rounded-full relative"
          alt="avatar"
        />
        <h4 className=' text-xl'>{user.name}</h4>
      </div>
    </div>
  );
}

export default User;