import { OldPost } from "../../data";
import { ElderPosts } from "../elderPosts/ElderPosts";
import { NewPostForm } from "../newPostForm/NewPostForm";
//import { userSlice } from '../../../redux/store'
import { useDispatch } from "react-redux";

export function MyPosts() {
  const dispatch = useDispatch();

  const fetchUserDataAction = () => {};

  return (
    <div>
      <NewPostForm />
      <ElderPosts Posts={OldPost} />
      <button onClick={fetchUserDataAction}>Fetch User Data</button>
    </div>
  );
}
