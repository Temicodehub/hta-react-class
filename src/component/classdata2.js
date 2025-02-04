import React, { useState } from "react";
import { data2 } from "../classwork";
console.log(data1);
const Classdata = () => {
  const [data, setData] = useState(data2);
  const clearList = () => {
    setData([]);
  };
  const reloadList = () => {
    setData(data2);
  };
  const deleteperson = (id) => {
    const newperson = data.filter((person) => person.id !== id);
    setData(newperson);
  };
  return (
    <div>
      <ul>
        {data.map((person) => {
          const { id, name, address, phonenumber } = person;
          return (
            <span>
              <li key={person.id}>
                <h1>{name}</h1>
                <h2>{address}</h2>
                <h3>{phonenumber}</h3>
              </li>
              <button onClick={() => deleteperson(id)}>delete</button>
            </span>
          );
        })}
      </ul>
      <button onClick={clearList}>clearList</button>
      <button onClick={reloadList}>reloadList</button>
    </div>
  );
};

export default Classdata;
