import React from "react";
import spinner from "./833.gif";
export default function Spinner() {
  return (
    <div class="lds-roller">
      <img src={spinner} />
    </div>
  );
}
