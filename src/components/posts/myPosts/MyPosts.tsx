import { OldPost } from "../../data";
import { ElderPosts } from "../elderPosts/ElderPosts";
import { NewPostForm } from "../newPostForm/NewPostForm";

export function MyPosts () {
  return (
    <div>
      <NewPostForm />
      <ElderPosts Posts={OldPost} />
    </div>
  );
}
