import React from "react";
import { WrapperButton } from "./elements";

const AnchorButton = ({ title, url, target, rel }) => {
  return (
    <WrapperButton href={url} target={target} rel={rel}>
      {title}
    </WrapperButton>
  );
};

export default AnchorButton;
