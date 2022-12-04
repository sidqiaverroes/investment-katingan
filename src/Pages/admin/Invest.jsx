import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRedirectLoggedOutUser from "../../customHooks/useRedirect";
import { selectIsLoggedIn } from "../../redux/authSlice";
import { getInvests } from "../../redux/investSlice";

import ProductList from "../../components/dashboard/ProductList";

const Invest = () => {
  useRedirectLoggedOutUser("/KatinganAdmin");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { invests, isLoading, isError, message } = useSelector(
    (state) => state.invest
  );

  console.log(invests);

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getInvests());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
      <ProductList
        products={invests}
        isLoading={isLoading}
        title="Daftar Peluang Investasi"
        linkTo="/invest/tambah-investasi"
        buttonPlaceholder="Tambah Investasi"
      />
    </div>
  );
};

export default Invest;
