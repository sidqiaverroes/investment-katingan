import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/authSlice";
import { getInvests } from "../../redux/investSlice";

import InvestList from "../../components/dashboard/InvestList";

const Invest = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { invests, isLoading, isError, message } = useSelector(
    (state) => state.invest
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getInvests());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const formatDate = (date, type) => {
    const string = date.split("T");

    const finalDate = string[0];

    const rawTime = string[1].split(".");
    const finalTime = rawTime[0];

    if (type === "date") {
      return finalDate;
    }
    if (type === "time") {
      return finalTime;
    }
  };

  return (
    <div>
      <InvestList
        products={invests}
        isLoading={isLoading}
        title="Daftar Peluang Investasi"
        linkTo="/invest/tambah-investasi"
        buttonPlaceholder="Tambah Investasi"
        formatDate={formatDate}
      />
    </div>
  );
};

export default Invest;
