import React, { useState } from "react";
import { data4, data4 } from "../classwork";
console.log(data4);
const Classdata = () => 
  const [data, setData] = useState(data4);
  const clearList = () => {
    setData([]);
  };
  const reloadList = () => {
    setData(data4);
  };
  const deleteperson = (id) => {
    const newperson = data.filter((person) => person.id !== id);
    setData(newperson);
  };
  return 
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