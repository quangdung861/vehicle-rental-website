import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Rate,
  Space,
  Button,
  DatePicker,
  Input,
  Form,
  InputNumber,
} from "antd";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  getProductDetailAction,
  addOrderAction,
} from "../../../redux/user/actions";
import moment from "moment";

import * as S from "./styles";

const ProductDetailPage = () => {
  const location = useLocation();

  const { productDetail } = useSelector((state) => state.productReducer);
  console.log(
    "🚀 ~ file: index.jsx:29 ~ ProductDetailPage ~ productDetail",
    productDetail
  );

  const [priceFinish, setPriceFinish] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  let price = 0;

  const [productQuantity, setProductQuantity] = useState(1);

  const productId =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetailAction({ productId }));
  }, []);

  const handleSubmitOrder = (values) => {
    var start = moment(values.start.$d);
    var end = moment(values.end.$d);
    var duration = moment.duration(start.diff(end));
    var hours = -parseInt(Math.floor(duration.asHours()).toFixed());

    if (productDetail.data.name === "Yamaha Sirus 110cc") {
      if (hours <= 120) {
        price = 130000;
      } else if (hours <= 240) {
        price = 120000;
      } else if (hours <= 360) {
        price = 110000;
      } else if (hours <= 480) {
        price = 100000;
      } else if (hours <= 600) {
        price = 90000;
      } else if (hours <= 720) {
        price = 80000;
      } else if (hours > 720) {
        price = 80000;
      }
    } else if (productDetail.data.name === "Honda Air Blade 125cc") {
      if (hours <= 120) {
        price = 200000;
      } else if (hours <= 240) {
        price = 180000;
      } else if (hours <= 360) {
        price = 160000;
      } else if (hours <= 480) {
        price = 140000;
      } else if (hours <= 600) {
        price = 120000;
      } else if (hours <= 720) {
        price = 120000;
      } else if (hours > 720) {
        price = 120000;
      }
    } else if (productDetail.data.name === "Honda Vision") {
      if (hours <= 120) {
        price = 180000;
      } else if (hours <= 240) {
        price = 160000;
      } else if (hours <= 360) {
        price = 140000;
      } else if (hours <= 480) {
        price = 120000;
      } else if (hours <= 600) {
        price = 110000;
      } else if (hours <= 720) {
        price = 100000;
      } else if (hours > 720) {
        price = 100000;
      }
    }

    setPriceFinish(price);
    setTotalPrice(price * (hours / 24).toFixed() * values.quantity);

    dispatch(
      addOrderAction({
        ...values,
        priceFinish: price,
        totalPrice: price * (hours / 24).toFixed() * values.quantity,
        productId,
      })
    );
  };

  return (
    <S.Wrapper>
      <Row gutter={12}>
        <Col span={12}>
          <img
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
            src="https://www.firstpost.com/wp-content/uploads/2021/12/harley-davidson-sportster-s-launched-india-15-51-lakh-price-india-bike-week-2021-1.jpg"
            alt=""
          />
        </Col>
        <Col span={12}>
          <Col span={24}>
            <div style={{ fontSize: 24, fontWeight: 500 }}>
              {productDetail.data.name}
            </div>
          </Col>
          <Col span={24}>
            <Rate style={{ marginBottom: 16 }} value={5} />
          </Col>
          <Col span={24} style={{ marginBottom: 30 }}>
            <div>
              <Space>
                <div>Loại:</div>
                <div style={{ color: "#D45E54", fontWeight: 600 }}>
                  {productDetail.data.category}
                </div>
              </Space>
            </div>
            <div>
              <Space>
                <div>Đời:</div>
                <div style={{ color: "#D45E54", fontWeight: 600 }}>
                  {productDetail.data.model}
                </div>
              </Space>
            </div>
            <div>
              <Space>
                <div>Tình trạng:</div>
                <div style={{ color: "#D45E54", fontWeight: 600 }}>
                  {productDetail.data.status}
                </div>
              </Space>
            </div>
          </Col>
          <Form
            name="basic"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 10,
            }}
            initialValues={{
              quantity: 1,
            }}
            onFinish={(values) => handleSubmitOrder(values)}
            autoComplete="off"
          >
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label="Bắt đầu:"
                name="start"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập ngày bắt đầu!",
                  },
                ]}
              >
                <DatePicker
                  showTime
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label="Kết thúc:"
                name="end"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập ngày Kết thúc!",
                  },
                ]}
              >
                <DatePicker
                  showTime
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label="Họ và tên:"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập Họ và Tên!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label="Số điện thoại:"
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập Số điện thoại!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label="CMND/CCCD:"
                name="cmnd"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa nhập CMND/CCCD!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label="Số lượng:"
                name="quantity"
                rules={[
                  {
                    required: true,
                    message: "Bạn Chưa nhập số lượng!",
                  },
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  min={1}
                  value={productQuantity}
                  onChange={(values) => setProductQuantity(values)}
                />
              </Form.Item>
            </Col>
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label={
                  <div style={{ fontWeight: 600, fontSize: "16px" }}>
                    Đơn giá/Ngày
                  </div>
                }
              >
                <div
                  style={{ textAlign: "right", fontSize: 20, fontWeight: 500 }}
                >
                  {priceFinish.toLocaleString()} {`đ`}
                </div>
              </Form.Item>
            </Col>
            <Col span={24} style={{ marginBottom: 16 }}>
              <Form.Item
                label={
                  <div style={{ fontWeight: 600, fontSize: "20px" }}>
                    Tổng tiền
                  </div>
                }
              >
                <div
                  style={{
                    textAlign: "right",
                    color: "#FF4D4F",
                    fontSize: 24,
                    fontWeight: 500,
                  }}
                >
                  {totalPrice.toLocaleString()} {`đ`}
                </div>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                wrapperCol={{
                  offset: 6,
                  span: 10,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  danger
                  style={{ width: "100%" }}
                >
                  Đặt Xe
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default ProductDetailPage;
