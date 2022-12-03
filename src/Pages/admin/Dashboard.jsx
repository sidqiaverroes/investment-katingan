import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRedirectLoggedOutUser from "../../customHooks/useRedirect";
import { selectIsLoggedIn } from "../../redux/authSlice";
import { getProducts } from "../../redux/productSlice";

import ProductList from "../../components/dashboard/ProductList";

const Dashboard = () => {
  useRedirectLoggedOutUser("/KatinganAdmin");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  console.log(products);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
      <ProductList products={products} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;