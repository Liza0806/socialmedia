import { ElderPosts } from "../elderPosts/ElderPosts";
import { NewPostForm } from "../newPostForm/NewPostForm";

export function MyPosts () {
  return (
    <div>
        <h2>My posts</h2>
      <NewPostForm />
      <ElderPosts />
    </div>
  );
}
