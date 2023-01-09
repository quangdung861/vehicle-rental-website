import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getOrderListAction } from "../../../redux/user/actions";
const OrderListPage = () => {
  const dispatch = useDispatch();

  const { orderList } = useSelector((state) => state.orderReducer);
  console.log("🚀 ~ file: index.jsx:10 ~ OrderListPage ~ orderList", orderList);

  useEffect(() => {
    dispatch(getOrderListAction());
  }, []);

  const dataSource = orderList.data.map((item) => {
    return {
      ...item,
      key: item.id,
    };
  });
  console.log("🚀 ~ file: index.jsx:22 ~ dataSource ~ dataSource", dataSource);

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Bắt đầu",
      dataIndex: "start",
      key: "start",
    },
    {
      title: "Kết thúc",
      dataIndex: "end",
      key: "end",
    },
    {
      title: "Loại",
      dataIndex: "category",
      key: "category",
      render: (_, record) => <div>{record.product?.category}</div>,
    },
    {
      title: "Biển số",
      dataIndex: "licensePlates",
      key: "licensePlates",
      render: (_, record) => <div>{record.product?.licensePlates}</div>,
    },
    {
      title: "Số khung",
      dataIndex: "frameNumber",
      key: "frameNumber",
      render: (_, record) => <div>{record.product?.frameNumber}</div>,
    },
    {
      title: "Số máy",
      dataIndex: "machineNumber",
      key: "machineNumber",
      render: (_, record) => <div>{record.product?.machineNumber}</div>,
    },
    {
      title: "CMND/CCCD",
      dataIndex: "cmnd",
      key: "cmnd",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Đơn giá",
      dataIndex: "priceFinish",
      key: "priceFinish",
      render: (priceFinish) => (
        <div style={{ color: "red" }}>{priceFinish.toLocaleString()} đ</div>
      ),
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => (
        <div style={{ color: "red" }}>{totalPrice.toLocaleString()} đ</div>
      ),
    },
  ];
  return (
    <div style={{ padding: "16px" }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{
          x: 2000,
        }}
      />
    </div>
  );
};

export default OrderListPage;
