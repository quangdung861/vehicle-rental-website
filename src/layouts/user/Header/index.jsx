import React from "react";
import styled from "styled-components";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";


import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <S.Wraper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              src="https://doanhnghiep.quocgiakhoinghiep.vn/wp-content/uploads/2020/09/download-1-1.png"
              alt=""
              style={{ width: 60, cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </div>
          <div
            style={{
              margin: "0px 12px 0px 50px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocalPhoneOutlinedIcon />
            <div>1900 9217</div>
          </div>
          <div
            style={{
              margin: "0px 24px",
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocalPostOfficeOutlinedIcon />
            <div style={{ marginLeft: 3 }}>contact@mioto.vn</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <S.Login>Đăng nhập</S.Login>
          <S.Register
            style={{
              marginLeft: 20,
              marginRight: "30px",
              border: "1px solid",
              borderRadius: 3,
            }}
          >
            <div>Đăng ký</div>
          </S.Register>
        </div>
      </div>
    </S.Wraper>
  );
};

export default Header;
