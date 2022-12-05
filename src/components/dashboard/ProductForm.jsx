import React from "react";
import { Link } from "react-router-dom";
import InputBar from "./InputBar";
import noImage from "../../Assets/picplaceholder.jpg";

const ProductForm = ({
  product,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveProduct,
  title,
}) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 ">
      <div className="max-w-screen-xl w-full">
        <form onSubmit={saveProduct}>
          <div className="bg-gray-100 rounded-lg shadow p-20">
            <div className="mb-8 font-semibold text-4xl text-gray-800">
              {title}
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-4 ">
                <label className="flex items-start justify-end mr-20 text-right">
                  Foto :
                </label>

                <span className="col-span-3 flex flex-col gap-4 justify-center items-start">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="productpreview"
                      className=" h-80 w-80 rounded-lg object-cover"
                    />
                  ) : (
                    <img
                      src={noImage}
                      alt="productpreview"
                      className="h-80 w-80 rounded-lg object-cover"
                    />
                  )}
                  <span className="flex flex-col gap-2">
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <p className=" text-gray-800">
                      Supported Formats: jpg, jpeg, png
                    </p>
                  </span>
                </span>
              </div>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-center justify-end mr-20 text-right">
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
                <label className="flex items-center justify-end mr-20 text-right">
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
                <label className="flex items-center justify-end mr-20 text-right">
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
                <label className="flex items-center justify-end mr-20 text-right">
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

            <div className="flex justify-end pt-8 gap-4">
              <Link to="/komoditas">
                <button
                  type="button"
                  className="flex justify-center items-center w-auto gap-2 px-4 py-2 rounded-md text-birumud border border-birumud bg-white hover:bg-birumud hover:text-white shadow-md hover:shadow-lg"
                >
                  Batal
                </button>
              </Link>

              <button
                type="submit"
                className="flex justify-center items-center w-auto gap-2 px-4 py-2 rounded-md text-white bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg"
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
