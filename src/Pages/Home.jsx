import React, { useState, useEffect } from "react";
import Layout from "../Components/Layouts/Layout";
import Carousal from "../Components/UI/Carousal";
import Card from "../Components/UI/Card";
import { Checkbox, Radio, Pagination } from "antd";
import axios from "axios";
import { Prices } from "../Components/Prices";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); //forr filtered Products
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3); //Set Page Display Size

  useEffect(() => {
    getAllCategory();
    getAllProducts();
  }, []);

  const getAllCategory = async () => {
    try {
      const res = await axios.get(
        "https://medicart-backend.onrender.com/ecomm/api/v1/auth/allCategories"
      );
      if (res.data.sucess) {
        setCategories(res.data.categories);
      } else {
        console.log("Error in Getting Categories");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://medicart-backend.onrender.com/ecomm/api/v1/auth/getProduct"
      );
      setProducts(res.data.Products);
      setFilteredProducts(res.data.Products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  useEffect(() => {
    filteredProduct();
  }, [checked, radio]);

  const filteredProduct = async () => {
    try {
      const res = await axios.post(
        "https://medicart-backend.onrender.com/ecomm/api/v1/auth/product-filter",
        { checked, radio }
      );
      // setProducts(res.data?.products);
      setFilteredProducts(res.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  // const displayedProducts = products.slice(startIndex, endIndex);
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      <Layout title={"All Products - Best offers "}>
        <Carousal />
        <div className="lg:flex mx-auto mt-3">
          
        <div className="md:w-5/6 flex flex-col items-center text-center mx-auto">
        {displayedProducts.length === 0 ? (
  <h1 className="font-bold text-center my-4">No Products</h1>
) : (
  <>
    <h1 className="font-bold text-center my-4 text-2xl">All Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {displayedProducts.map((product) => (
        <Card
          key={product._id}
          id={product._id}
          image={
            product._id
              ? `https://medicart-backend.onrender.com/ecomm/api/v1/auth/productPhoto/${product._id}`
              : ""
          }
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  </>
)}


  <Pagination
    className="mt-8"
    showSizeChanger
    onShowSizeChange={setPageSize}
    onChange={onPageChange}
    defaultCurrent={currentPage}
    pageSize={pageSize}
    total={products.length}
  />
</div>

        </div>
      </Layout>
    </>
  );
};
export default Home;
