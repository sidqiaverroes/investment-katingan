import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import ProductForm from "../../components/dashboard/ProductForm";
import { createProduct, selectIsLoading } from "../../redux/productSlice";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  location: "",
  landArea: "",
  production: "",
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const isLoading = useSelector(selectIsLoading);

  const { name, location, landArea, production } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  // const generateKSKU = (category) => {
  //   const letter = category.slice(0, 3).toUpperCase();
  //   const number = Date.now();
  //   const sku = letter + "-" + number;
  //   return sku;
  // };

  const saveProduct = async (e) => {
    e.preventDefault();
    if (!name || !location || !landArea || !production) {
      return toast.error("All fields are required");
    }

    const product = {
      name,
      location,
      landArea,
      production,
    };

    try {
      await dispatch(createProduct(product));
      navigate("/dashboard");
    } catch (error) {
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
        // imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        // handleImageChange={handleImageChange}
        saveProduct={saveProduct}
      />
    </div>
  );
};

export default AddProduct;
