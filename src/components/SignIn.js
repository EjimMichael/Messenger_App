import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { HiOutlineChat } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { getAuth } from "firebase/auth";

function SignIn() {
  const auth = getAuth();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  };

  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col">
      <h1 className="text-center text-2xl mt-20">Mystic Messenger</h1>
      <div className="shadow-xl flex flex-col items-center justify-center w-[70%] sm:w-[50%] lg:w-[38%] h-[65%] bg-white m-auto">
        <HiOutlineChat className="w-12 h-12 text-blue-700 mb-5" />
        <div className="flex mt-2">
          <FcGoogle className="w-[30px] h-[30px] md:w-[45px] md:h-[45px]" />
          <h1 className="text-xl md:pt-2 pl-1">Sign In with Google</h1>
        </div>

        <div className="rounded-lg bg-[#4964c7] p-3 mt-[35%]">
        
            <button onClick={googleSignIn}>Sign In with Google</button>
         
        </div>
      </div>
    </div>
  );
}

export default SignIn;
