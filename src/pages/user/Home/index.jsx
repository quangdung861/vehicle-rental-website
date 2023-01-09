import React from "react";


import image1 from "../../../assets/img/image1.jpg";
import BoxFind from "./components/BoxFind";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Wraper>
      <div
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundImage: `url(${image1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          padding: "96px 0px 128px 0px",
        }}
      >
        <div
          style={{
            color: "#4B4D52",
            fontSize: 32,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          MIOTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH
        </div>
        <BoxFind />
      </div>
    </S.Wraper>
  );
};

export default Home;
