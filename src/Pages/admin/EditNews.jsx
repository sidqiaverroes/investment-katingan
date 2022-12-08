import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import NewsForm from "../../components/dashboard/NewsForm";
import {
  getOneNews,
  getNews,
  selectNews,
  updateNews,
} from "../../redux/newsSlice";

const EditNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newsEdit = useSelector(selectNews);

  const [news, setNews] = useState(newsEdit);
  const [newsImage, setNewsImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getOneNews(id));
    setIsLoading(false);
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(true);
    setNews(newsEdit);
    setImagePreview(newsEdit && newsEdit.image ? newsEdit.image : null);
    setIsLoading(false);
  }, [newsEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewsImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveNews = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      //Handle Image Upload
      let imageURL;
      if (
        newsImage &&
        (newsImage.type === "image/jpeg" ||
          newsImage.type === "image/jpg" ||
          newsImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", newsImage);
        image.append("cloud_name", "dyd6yggca");
        image.append("upload_preset", "pawpatrol10");

        // First save image to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dyd6yggca/image/upload",
          { method: "post", body: image }
        );
        const imgData = await response.json();
        imageURL = imgData.url.toString();
      }

      const formData = {
        title: news.title,
        desc: news.desc,
        image: newsImage ? imageURL : news.image,
      };

      await dispatch(updateNews({ id, formData }));
      await dispatch(getNews());
      navigate("/news");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <NewsForm
        news={news}
        newsImage={newsImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveNews={saveNews}
        title="Sunting Berita"
      />
    </div>
  );
};

export default EditNews;
