import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import InvestForm from "../../components/dashboard/InvestForm";
import {
  getInvest,
  getInvests,
  selectInvest,
  updateInvest,
} from "../../redux/investSlice";

const EditInvest = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const investEdit = useSelector(selectInvest);

  const [invest, setInvest] = useState(investEdit);
  const [investImage, setInvestImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getInvest(id));
    setIsLoading(false);
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(true);
    setInvest(investEdit);
    setImagePreview(investEdit && investEdit.image ? investEdit.image : null);
    setIsLoading(false);
  }, [investEdit]);

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

    try {
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

      const formData = {
        name: invest.name,
        location: invest.location,
        cost: invest.cost,
        mapLink: invest.mapLink,
        desc: invest.desc,
        image: investImage ? imageURL : invest.image,
      };

      await dispatch(updateInvest({ id, formData }));
      await dispatch(getInvests());
      navigate("/invest");
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
      <InvestForm
        invest={invest}
        investImage={investImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveInvest={saveInvest}
        title="Sunting Komoditas"
      />
    </div>
  );
};

export default EditInvest;
