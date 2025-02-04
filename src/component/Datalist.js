import React, { useState } from "react";
import data from "../data";
console.log(data);

const Datalist = () => {
  const [friends, setFriends] = useState(data);
  const clearlist = () => {
    setFriends([]);
  };
  const reloadList = () => {
    setFriends(data);
  };
  return (
    <div>
      {friends.map((friendsItem) => {
        const { id, name, age } = friendsItem;
        return (
          <div key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
      <button onClick={clearlist}>Clear List</button>
    </div>
  );
};

export default Datalist;
