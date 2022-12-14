import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/authSlice";
import { getProducts } from "../../redux/productSlice";

import ProductList from "../../components/dashboard/ProductList";

const Product = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  //   console.log(products);

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
      <ProductList
        products={products}
        isLoading={isLoading}
        title="Daftar Komoditas Unggulan"
        linkTo="/komoditas/tambah-komoditas"
        buttonPlaceholder="Tambah Komoditas"
      />
    </div>
  );
};

export default Product;
