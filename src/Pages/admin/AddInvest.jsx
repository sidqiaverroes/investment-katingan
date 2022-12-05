import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import InvestForm from "../../components/dashboard/InvestForm";
import { createInvest } from "../../redux/investSlice";
import { toast } from "react-toastify";

const AddInvest = () => {
  const initialState = {
    name: "",
    location: "",
    cost: "",
    mapLink: "",
    desc: "",
    image: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invest, setInvest] = useState(initialState);
  const [investImage, setInvestImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { name, location, cost, mapLink } = invest;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvest({ ...invest, [name]: value });
  };

  const handleImageChange = (e) => {
    setInvestImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveInvest = async (e) => {
    e.preventDefault();

    if (!name || !location || !cost || !mapLink) {
      return toast.error("Please fill all the required fields");
    }

    setIsLoading(true);
    //Handle Image Upload
    let imageURL;
    if (
      investImage &&
      (investImage.type === "image/jpeg" ||
        investImage.type === "image/jpg" ||
        investImage.type === "image/png")
    ) {
      const image = new FormData();
      image.append("file", investImage);
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

    const newInvest = {
      name: invest.name,
      location: invest.location,
      cost: invest.cost,
      mapLink: invest.mapLink,
      desc: invest.desc,
      image: imageURL,
    };

    try {
      await dispatch(createInvest(newInvest));
      navigate("/invest");
      console.log("Investment successfully created");
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
      <InvestForm
        product={invest}
        productImage={investImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveInvest={saveInvest}
        title="Tambah Peluang Investasi"
      />
    </div>
  );
};

export default AddInvest;
