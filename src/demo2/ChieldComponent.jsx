import React, { useContext } from "react";
import { UserContext } from "./WrapperComponent";

export default function ChieldComponent() {
  const user = useContext(UserContext);
  return <div>{user}</div>;
}
