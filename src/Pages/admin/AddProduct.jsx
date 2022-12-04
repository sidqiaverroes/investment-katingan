import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import ProductForm from "../../components/dashboard/ProductForm";
import { createProduct } from "../../redux/productSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
  const initialState = {
    name: "",
    location: "",
    landArea: "",
    production: "",
    image: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { name, location, landArea, production } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    if (!name || !location || !landArea || !production) {
      return toast.error("All fields are required");
    }

    setIsLoading(true);
    //Handle Image Upload
    let imageURL;
    if (
      productImage &&
      (productImage.type === "image/jpeg" ||
        productImage.type === "image/jpg" ||
        productImage.type === "image/png")
    ) {
      const image = new FormData();
      image.append("file", productImage);
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

    const newProduct = {
      name: product.name,
      location: product.location,
      landArea: product.landArea,
      production: product.production,
      image: imageURL,
    };

    try {
      await dispatch(createProduct(newProduct));
      navigate("/dashboard");
      console.log("Product successfully created");
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
      <ProductForm
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
        title="Tambah Komoditas"
      />
    </div>
  );
};

export default AddProduct;
