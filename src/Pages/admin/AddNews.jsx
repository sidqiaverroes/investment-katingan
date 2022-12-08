import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { createNews } from "../../redux/newsSlice";
import { toast } from "react-toastify";
import NewsForm from "../../components/dashboard/NewsForm";

const AddNews = () => {
  const initialState = {
    title: "",
    desc: "",
    image: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [news, setNews] = useState(initialState);
  const [newsImage, setNewsImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { title, desc } = news;

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

    if (!title || !desc) {
      return toast.error("Please fill all the required fields");
    }

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

    const newNews = {
      title: news.title,
      desc: news.desc,
      image: imageURL,
    };

    try {
      await dispatch(createNews(newNews));
      navigate("/news");
      console.log("News successfully created");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <NewsForm
        product={news}
        productImage={newsImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveNews={saveNews}
        title="Tambah Berita"
      />
    </div>
  );
};

export default AddNews;
