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
import Loader from "../Loader";

import {
  FILTER_PRODUCTS,
  selectFilteredPoducts,
} from "../../redux/filterSlice";
import { deleteProduct, getProducts } from "../../redux/productSlice";

const ProductList = ({ products, isLoading }) => {
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

  const delProduct = async (id) => {
    console.log(id);
    await dispatch(deleteProduct(id));
    await dispatch(getProducts());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Product",
      message: "Are you sure you want to delete this product.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delProduct(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
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
            Daftar Komoditas Unggulan
          </div>

          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        {isLoading && <Loader />}

        <div className="w-full text-left mt-8">
          {!isLoading && products.length === 0 ? (
            <p>Belum ada komoditas, silakan tambah komoditas.</p>
          ) : (
            <table className="w-full ">
              <thead>
                <tr className=" text-gray-500">
                  <th className="py-2">No</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Location</th>
                  <th className="py-2">Land Area</th>
                  <th className="py-2">Production</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((product, index) => {
                  const { _id, name, location, landArea, production } = product;
                  return (
                    <tr key={_id}>
                      <td className="py-3">{index + 1}</td>
                      <td className="py-3">{shortenText(name, 16)}</td>
                      <td className="py-3">{location}</td>
                      <td className="py-3">{landArea}</td>
                      <td className="py-3">{production}</td>
                      <td className="flex flex-row gap-2 py-3">
                        {/* <span>
                          <Link to={`/product-detail/${_id}`}>
                            <IoEyeSharp size={20} />
                          </Link>
                        </span> */}
                        <button className="p-1 rounded-md bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg">
                          <Link to={`/edit-komoditas/${_id}`}>
                            <MdEdit size={20} color="white" />
                          </Link>
                        </button>
                        <button className="p-1 rounded-md cursor-pointer bg-orenmud hover:bg-orenmud2 shadow-md hover:shadow-lg ">
                          <IoTrash
                            size={20}
                            color="white"
                            onClick={() => confirmDelete(_id)}
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
