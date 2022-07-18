import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";

function User({ user, selectUser }) {
  return (
    <div>
      <div className="flex pl-2 pb-1 m-5 w-[300px] h-10 rounded-full bg-white">
        <HiOutlineSearch className="mt-3" />
        <input className="mt-1 pl-1" placeholder="Search" type="text" />
      </div>
      <div className='flex cursor-pointer pt-2' onClick={() => selectUser(user)}>
        <img
          src={user.avatar || user?.reloadUserInfo?.photoURL}
          className="w-10 h-10 mx-4 border rounded-full relative"
          alt="avatar"
        />
        <h4 className='text-xl mt-1'>{user.name}</h4>
      </div>
    </div>
  );
}

export default User;