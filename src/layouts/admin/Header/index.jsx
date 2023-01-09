import React from "react";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Wraper>
      <div
        style={{
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          paddingTop: 12,
        }}
      >
        ADMIN
      </div>
    </S.Wraper>
  );
};

export default Header;
