import { useState, useEffect } from "react";
import { db, storage, auth } from "../firebaseConfig";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { HiOutlineChat, HiCamera } from "react-icons/hi";
import SignOut from "./SignOut";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

function Chat() {
  const [image, setImage] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
    if (image) {
      const uploadImage = async () => {
        const imageRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${image.name}`
        );

        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const photo = await uploadBytes(imageRef, image);
          const url = await getDownloadURL(ref(storage, photo.ref.fullPath));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: photo.ref.fullPath,
          });
          setImage("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImage();
    }
  }, [image]);

  return user ? (
    <div className="p-5 bg-[#F5F7FB] border-y-2">
      <div className="flex">
        <HiOutlineChat className="w-12 h-12" />
        <h1 className="mt-2 text-lg">Mystic_Chat</h1>
        <SignOut />
        <div className="w-14 h-14 ml-2 border rounded-full relative">
          <img
            src={user.avatar || user?.reloadUserInfo?.photoURL}
            alt="avatar"
          />
          <label htmlFor="photo">
            <HiCamera className="absolute" />
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            id="photo"
            className="hidden"
          />
        </div>
      </div>

      
    </div>
  ) : null;
}

export default Chat;
