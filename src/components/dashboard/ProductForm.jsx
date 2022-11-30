import React from "react";
import InputBar from "./InputBar";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 ">
      <div className="max-w-screen-xl w-full">
        <form onSubmit={saveProduct}>
          <div className="bg-gray-100 rounded-lg shadow p-20">
            <div className="mb-8 font-semibold text-4xl text-gray-800">
              Tambah Komoditas Baru
            </div>
            <div className="flex flex-col gap-8 py-4">
              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20">
                  Nama :
                </label>
                <InputBar
                  type="text"
                  name="name"
                  placeholder="Nama komoditas"
                  value={product?.name}
                  onChange={handleInputChange}
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20">
                  Lokasi :
                </label>
                <InputBar
                  type="text"
                  name="location"
                  placeholder="Lokasi komoditas"
                  value={product?.location}
                  onChange={handleInputChange}
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20">
                  Luas Lahan :
                </label>
                <InputBar
                  type="text"
                  name="landArea"
                  placeholder="Luas lahan komoditas"
                  value={product?.landArea}
                  onChange={handleInputChange}
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20">
                  Produksi :
                </label>
                <InputBar
                  type="text"
                  name="production"
                  placeholder="Tingkat Produksi Komoditas"
                  value={product?.production}
                  onChange={handleInputChange}
                />
              </span>
            </div>
            {/* <div>
              <label>Product Image</label>
              <code>Supported Formats: jpg, jpeg, png</code>
              <input
                type="file"
                name="image"
                onChange={(e) => handleImageChange(e)}
              />

              {imagePreview != null ? (
                <div className="image-preview">
                  <img src={imagePreview} alt="product" />
                </div>
              ) : (
                <p>No image set for this poduct.</p>
              )}
            </div> */}
            <div className="flex justify-end pt-8">
              <button
                type="submit"
                className="flex justify-center items-center w-auto gap-2 px-4 py-2 rounded-md text-white bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg"
              >
                Save Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
