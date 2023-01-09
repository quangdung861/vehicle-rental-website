import { Routes, Route } from "react-router-dom";
import "moment/locale/vi";

import UserLayout from "./layouts/user/UserLayout";
import Home from "./pages/user/Home";
import Products from "./pages/user/Products";
import ProductDetailPage from "./pages/user/ProductDetailPage";

import AdminLayout from "./layouts/admin/AdminLayout";
import CreateProductPage from "./pages/admin/CreateProductPage";
import OrderListPage from "./pages/admin/OrderListPage";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTES.USER.HOME} element={<Home />} />
        <Route path={ROUTES.USER.PRODUCT_LIST} element={<Products />} />
        <Route
          path={ROUTES.USER.PRODUCT_DETAIL}
          element={<ProductDetailPage />}
        />
      </Route>
      <Route element={<AdminLayout />}>
        <Route
          path={ROUTES.ADMIN.CREATE_PRODUCT}
          element={<CreateProductPage />}
        ></Route>
        <Route path={ROUTES.ADMIN.ORDERS} element={<OrderListPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
