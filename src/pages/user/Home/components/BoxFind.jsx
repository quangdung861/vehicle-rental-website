import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ROUTES } from "../../../../constants/routes";

const BoxFind = () => {
  const navigate = useNavigate();
  const [isChoose, setIsChoose] = useState("self");

  const CssTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& label": {
      color: "#289245",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  const CssButton = styled(Button)({
    color: "#289245",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#d6d3d3",
      borderColor: "#d6d3d3",
      boxShadow: "none",
    },
  });
  return (
    <div
      style={{
        width: 800,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        margin: "auto",
        padding: 25,
        borderRadius: 3,
        display: "flex",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: 160,
            height: 100,
            backgroundColor:
              isChoose === "self" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            color: "white",
            padding: "15px 30px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => setIsChoose("self")}
        >
          <div>
            <img
              style={{ objectFit: "cover", width: 80, height: 80 }}
              src="https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png"
              alt=""
            />
          </div>
          <div>Xe có tự lái</div>
        </div>
        <div
          style={{
            width: 160,
            height: 100,
            backgroundColor:
              isChoose === "driver"
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            color: "white",
            padding: "15px 30px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => setIsChoose("driver")}
        >
          <div>
            <img
              style={{ objectFit: "cover", width: 80, height: 80 }}
              src="https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png"
              alt=""
            />
          </div>
          <div>Xe có tài xế</div>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          padding: 25,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          marginLeft: 2,
        }}
      >
        <Stack
          component="form"
          noValidate
          autoComplete="off"
          direction="column"
          spacing={2}
        >
          <CssTextField
            required
            id="outlined-required"
            label="Địa điểm"
            placeholder="Nhập thành phố, quận, địa chỉ..."
          />
          <CssTextField
            id="datetime-local"
            label="Bắt đầu"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <CssTextField
            id="datetime-local"
            label="Kết thúc"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <CssButton
            variant="primary"
            onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
          >
            <SearchIcon />
            <div>TÌM XE NGAY</div>
          </CssButton>
        </Stack>
      </div>
    </div>
  );
};

export default BoxFind;
