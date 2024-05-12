import axios from "axios";
import { useEffect, useState } from "react";
export const Users = (props: any) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://social-network.samuraijs.com/api/1.0/users');
    //     const data = await response.json();
    //     console.log(data.items, 'data');
    //     setUsers(data.items);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://social-network.samuraijs.com/api/1.0/users"
        );

        setUsers(data.data.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {users &&
        users.map((user: any) => (
          <div key={user.id}>
            <div>
              <img
                src={user.avatarUrl}
                alt={user.fullname}
                width={100}
                height={100}
              />
              <button>{user.follow ? "unfollow" : "follow"}</button>
            </div>
            <div>
              <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              <div>{user.country}</div>
            </div>
          </div>
        ))}
    </div>
  );
};
