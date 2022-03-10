import React from "react";
import { WrapperButton } from "./elements";

const AnchorButton = ({ title, url, target  }) => {
  return (
      <WrapperButton href={ url } target={ target }>
          { title }
      </WrapperButton>
  );
};

export default AnchorButton;
