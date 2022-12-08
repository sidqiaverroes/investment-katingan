import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/authSlice";
import { getNews } from "../../redux/newsSlice";

import NewsList from "../../components/dashboard/NewsList";

const News = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { newses, isLoading, isError, message } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getNews());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div>
      <NewsList
        products={newses}
        isLoading={isLoading}
        title="Daftar Berita"
        linkTo="/news/tambah-news"
        buttonPlaceholder="Tambah Berita"
      />
    </div>
  );
};

export default News;
