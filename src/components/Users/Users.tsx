import { useSelector } from "react-redux";

export const Users = (props: any) => {
  const users = useSelector((state: any) => state.users.users);
  console.log(users, "users");
  
  return (
    <div>
      {users && users.map((user:any) => (
        <div key={user.id}>
          <div>
            <img src={user.avatarUrl} alt={user.fullname} width={100} height={100}/>
            <button>{user.follow ? "unfollow" : "follow"}</button>
          </div>
          <div>
            <div>
              <div>{user.fullname}</div>
              <div>{user.status}</div>
            </div>
            <div>{user.country}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
