
import { OldPost } from "../../data";
import { ElderPosts } from "../elderPosts/ElderPosts";
import { NewPostForm } from "../newPostForm/NewPostForm";
//import { userSlice } from '../../../redux/store'
import { useDispatch } from "react-redux";

export function MyPosts() {
  
  //console.log(userSlice, "-userSlice")
  //console.log(fetchUserData, "-fetchUserData")
  //console.log(fetchUserData(), "-fetchUserData()")
  const dispatch = useDispatch();

  const fetchUserDataAction = () => {

  };

  return (
    <div>
      <NewPostForm />
      <ElderPosts Posts={OldPost} />
      <button onClick={fetchUserDataAction}>Fetch User Data</button>
    </div>
  );
}
