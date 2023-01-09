import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { Input } from "antd";

import CustomCard from "./components/CustomCard";

import * as S from "./styles";

const Products = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [keyword, setKeyword] = useState("");

  return (
    <S.Wraper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <div
              style={{
                backgroundColor: "#ccc",
                padding: "10px 15px",
                textAlign: "center",
              }}
            >
              Header
            </div>
          </Grid>
          <Grid xs={3}>
            <div
              style={{
                backgroundColor: "#ccc",
                padding: "10px 15px",
                textAlign: "center",
              }}
            >
              <Input
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Tìm kiếm"
              />
            </div>
          </Grid>
          <Grid
            container
            rowSpacing={2}
            xs={9}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={12}
          >
            <CustomCard keyword={keyword} />
          </Grid>
        </Grid>
      </Box>
    </S.Wraper>
  );
};

export default Products;
