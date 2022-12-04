import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import ProductForm from "../../components/dashboard/ProductForm";
import {
  getProduct,
  getProducts,
  selectProduct,
  updateProduct,
} from "../../redux/productSlice";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productEdit = useSelector(selectProduct);

  const [product, setProduct] = useState(productEdit);
  const [productImage, setProductImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getProduct(id));
    setIsLoading(false);
  }, [dispatch, id]);

  useEffect(() => {
    setIsLoading(true);
    setProduct(productEdit);
    setImagePreview(
      productEdit && productEdit.image ? productEdit.image : null
    );
    setIsLoading(false);
  }, [productEdit]);

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

    try {
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

      const formData = {
        name: product.name,
        location: product.location,
        landArea: product.landArea,
        production: product.production,
        image: productImage ? imageURL : product.image,
      };

      await dispatch(updateProduct({ id, formData }));
      await dispatch(getProducts());
      navigate("/dashboard");
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
      <ProductForm
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
        title="Sunting Komoditas"
      />
    </div>
  );
};

export default EditProduct;
