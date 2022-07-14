import React from 'react'
import { auth } from '../firebaseConfig';

function SignOut() {
  return (
    <div className="h-10 rounded-lg bg-[#4964c7] p-2 ml-[80%]">
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default SignOut;