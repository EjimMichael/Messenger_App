import React from 'react'
import { auth } from '../firebaseConfig';

function SignOut() {
  return (
    <div className="h-10 w-[6%] rounded-lg bg-[#4964c7] p-2 ml-[75%] mt-2">
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default SignOut;