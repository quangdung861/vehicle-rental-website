import react, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Unstable_Grid2";

import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";

import { useDispatch, useSelector } from "react-redux";
import { getProductListAction } from "../../../../redux/user/actions";

export default function CustomCard({ keyword }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  const { productList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(
      getProductListAction(
        keyword,
      )
    );
  }, [keyword]);

  return productList.data.map((item) => (
    <Grid xs={6} key={item.id}>
      <Link
        style={{ textDecoration: "none" }}
        to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
          id: item.id,
        })}
      >
        <Card sx={{ cursor: "pointer" }}>
          <div style={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
              src="https://www.firstpost.com/wp-content/uploads/2021/12/harley-davidson-sportster-s-launched-india-15-51-lakh-price-india-bike-week-2021-1.jpg"
              alt=""
            />
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                color: "white",
                padding: "15px 15px 5px",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {item.name}
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "15px 15px 0px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Xe Ga</div>
            <div
              style={{ color: "#18A450", fontWeight: 700, fontSize: "18px" }}
            >
              120K
            </div>
          </div>
          <Stack
            style={{
              padding: "15px 15px 10px",
              display: "flex",
              alignItems: "center",
            }}
            direction="row"
            spacing={1}
          >
            <Chip size="small" label="Còn xe" />
            <Chip size="small" label="Giao xe tận nơi" />
          </Stack>
        </Card>
      </Link>
    </Grid>
  ));
}
