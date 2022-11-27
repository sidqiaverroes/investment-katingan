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
  const itemsPerPage = 5;

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
    <div className="flex flex-col justify-center items-center py-12 bg-gray-100">
      <div className="max-w-screen-xl w-full">
        <div>
          <span>
            <h3>Daftar Komoditas Unggulan</h3>
          </span>
          <span>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>

        {isLoading}

        <div className="table">
          {!isLoading && products.length === 0 ? (
            <p>-- No product found, please add a product...</p>
          ) : (
            <table className="">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Land Area</th>
                  <th>Production</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {currentItems.map((product, index) => {
                  const { _id, name, location, landArea, production } = product;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 16)}</td>
                      <td>{location}</td>
                      <td>{landArea}</td>
                      <td>{production}</td>
                      <td className="flex flex-row">
                        <span>
                          <Link to={`/product-detail/${_id}`}>
                            <IoEyeSharp size={20} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-product/${_id}`}>
                            <MdEdit size={20} />
                          </Link>
                        </span>
                        <span>
                          <IoTrash
                            size={20}
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
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
          previousLinkClassName="px-4 py-2 rounded-lg bg-birumud text-white"
          nextLinkClassName="px-4 py-2 rounded-lg bg-birumud text-white"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default ProductList;
