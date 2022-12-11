import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import { SpinnerImg } from "../../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { IoEyeSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";

import Search from "./Search";
import { SpinnerImg } from "../Loader";

import {
  FILTER_PRODUCTS,
  selectFilteredPoducts,
} from "../../redux/filterSlice";
import { deleteProduct, getProducts } from "../../redux/productSlice";

const ProductList = ({
  products,
  isLoading,
  title,
  linkTo,
  buttonPlaceholder,
}) => {
  const [search, setSearch] = useState("");
  const filteredProducts = useSelector(selectFilteredPoducts);

  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const formatDate = (date, type) => {
    const string = date.split("T");

    const finalDate = string[0];

    const rawTime = string[1].split(".");
    const finalTime = rawTime[0];

    if (type === "date") {
      return finalDate;
    }
    if (type === "time") {
      return finalTime;
    }
  };

  const delProduct = async (id) => {
    console.log(id);
    await dispatch(deleteProduct(id));
    await dispatch(getProducts());
  };

  const confirmDelete = (id, name) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="flex flex-col items-center justify-center border border-gray-300 py-12 rounded-lg shadow-2xl text-center">
            <p className="w-3/4 text-gray-800 text-2xl">
              Apakah Anda yakin untuk menghapus{" "}
              <span className="text-birumud font-semibold">{name}</span>?
            </p>
            <span className="flex flex-row items-center justify-center gap-4 mt-6">
              <button
                onClick={onClose}
                className="px-8 py-2 rounded-md text-birumud border border-birumud hover:bg-birumud shadow-md hover:shadow-lg"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  delProduct(id);
                  onClose();
                }}
                className="px-8 py-2 rounded-md text-white bg-orenmud hover:bg-orenmud2 shadow-md hover:shadow-lg"
              >
                Hapus
              </button>
            </span>
          </div>
        );
      },
    });
  };

  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({ products, search }));
  }, [products, search, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center py-12 ">
      <div className="max-w-screen-xl w-full">
        <div>
          <div className="mb-8 font-semibold text-4xl text-gray-800">
            {title}
          </div>

          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            linkTo={linkTo}
            buttonPlaceholder={buttonPlaceholder}
          />
        </div>

        {isLoading && <SpinnerImg />}

        <div className="w-full text-left mt-8">
          {!isLoading && products.length === 0 ? (
            <p>Belum ada data, silakan tambah data.</p>
          ) : (
            <table className="w-full ">
              <thead>
                <tr className=" text-gray-500">
                  <th className="py-2 px-4 w-16">No</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Location</th>
                  <th className="py-2">Land Area</th>
                  <th className="py-2">Production</th>
                  <th className="py-2">Date Created</th>
                  <th className="py-2">Last Edited</th>
                  <th className="py-2">Edited By</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((product, index) => {
                  const {
                    _id,
                    name,
                    location,
                    landArea,
                    production,
                    createdAt,
                    updatedAt,
                    editedBy,
                  } = product;
                  return (
                    <tr
                      key={_id}
                      className={
                        (index + 1) % 2 == 0 ? "bg-none" : "border bg-gray-100"
                      }
                    >
                      <td className="py-3 px-6">{index + 1}</td>
                      <td className="py-3">{shortenText(name, 16)}</td>
                      <td className="py-3 w-48">{shortenText(location, 16)}</td>
                      <td className="py-3 w-40">{landArea}</td>
                      <td className="py-3 pr-4 w-48">{production}</td>
                      <td className="py-3 w-36">
                        {formatDate(createdAt, "date")}
                      </td>
                      <td className="py-3">{formatDate(updatedAt, "date")}</td>
                      <td className="py-3">{editedBy}</td>
                      <td className="py-3">
                        {/* <span>
                          <Link to={`/product-detail/${_id}`}>
                            <IoEyeSharp size={20} />
                          </Link>
                        </span> */}
                        <button className="p-1 mr-2 rounded-md bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg">
                          <Link to={`/komoditas/edit-komoditas/${_id}`}>
                            <MdEdit size={20} color="white" />
                          </Link>
                        </button>
                        <button className="p-1 rounded-md cursor-pointer bg-orenmud hover:bg-orenmud2 shadow-md hover:shadow-lg ">
                          <IoTrash
                            size={20}
                            color="white"
                            onClick={() => confirmDelete(_id, name)}
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="flex flex-row justify-center items-center py-4 mt-4"
          pageLinkClassName=" mx-4"
          previousLinkClassName="px-4 py-2 rounded-lg text-white bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg"
          nextLinkClassName="px-4 py-2 rounded-lg text-white bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default ProductList;
