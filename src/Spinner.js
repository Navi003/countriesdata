import React from "react";
import spinner from "./833.gif";
export default function Spinner() {
  return (
    <div class="lds-roller">
      // eslint-disable-next-line jsx-a11y/alt-text
      <img src={spinner} />
    </div>
  );
}
