import { OldPostType, OldPostsType } from "../../data";
import { SubTitle } from "../../tytles/Titles";
import { OnePostItem } from "../onePostItem/OnePostItem";

export type OldPostsTypeListProps = {
  Posts: OldPostsType;
};
export function newFunction (props: any) {
    return (
      <div>
        {props}
      </div>
    )
}

export function ElderPosts({ Posts }: OldPostsTypeListProps) {
 // console.log(newFunction, newFunction.prototype)
// console.log(Object.keys(newFunction));
// console.log(Object.getOwnPropertyNames(newFunction));
  if (Posts) {
    return (
      <div>
        <SubTitle text="Old post" />

        <ul>
          {Posts.map((post: OldPostType) => {
            return <OnePostItem id={post.id} text={post.text} />;
          })}
        </ul>
      </div>
    );
  }
  return <p>no post. Type smth...</p>;
}
