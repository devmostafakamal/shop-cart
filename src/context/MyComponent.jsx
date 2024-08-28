import React, { useContext } from "react";
import { MyContext } from "./MyContext";

export default function MyComponent() {
  const { name, age } = useContext(MyContext);
  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>i am {age} years old</h2>
    </div>
  );
}
