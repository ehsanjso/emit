import React from "react";

const CopyRight = ({ name }) => (
  <p className="copy-right">
    built with
    <ion-icon name="ios-heart" />
    by <span>{name}</span>
  </p>
);

export default CopyRight;
