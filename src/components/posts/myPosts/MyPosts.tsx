import { ElderPosts } from "../elderPosts/ElderPosts";
import { NewPostForm } from "../newPostForm/NewPostForm";

export function MyPosts () {
  return (
    <div>
      <NewPostForm />
      <ElderPosts />
    </div>
  );
}
