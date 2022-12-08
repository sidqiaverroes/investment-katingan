import React from "react";
import { Link } from "react-router-dom";
import InputBar from "./InputBar";
import noImage from "../../Assets/picplaceholder.jpg";

const NewsForm = ({
  news,
  imagePreview,
  handleInputChange,
  handleImageChange,
  saveNews,
  title,
}) => {
  return (
    <div className="flex flex-col justify-center items-center py-12 ">
      <div className="max-w-screen-xl w-full">
        <form onSubmit={saveNews}>
          <div className="bg-gray-100 rounded-lg shadow p-20 h-auto">
            <div className="mb-8 font-semibold text-4xl text-gray-800">
              {title}
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-4 ">
                <label className="flex items-start justify-end mr-20 pt-2 text-right">
                  Foto :
                </label>

                <span className="col-span-3 flex flex-col gap-4 justify-center items-start">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="productpreview"
                      className="h-80 w-80 rounded-lg object-cover"
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
                  Judul :
                </label>
                <InputBar
                  type="text"
                  name="title"
                  placeholder="Judul Berita"
                  value={news?.name}
                  onChange={handleInputChange}
                />
              </span>

              <span className="grid grid-cols-4 w-full">
                <label className="flex items-start justify-end mr-20 pt-2 text-right">
                  Deskripsi :
                </label>
                <textarea
                  type="text"
                  name="desc"
                  placeholder="Deskripsi"
                  rows="10"
                  onChange={handleInputChange}
                  className="col-span-3 px-4 py-2 max-h-60 text-black bg-white border-2 drop-shadow rounded-md focus:border-birumud focus:ring-birumud2 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </span>
            </div>

            <div className="flex justify-end pt-8 gap-4">
              <Link to="/news">
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

export default NewsForm;
