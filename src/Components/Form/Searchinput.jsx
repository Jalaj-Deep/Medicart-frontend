import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Searchinput = () => {
  const { values, setValues } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Search keyword:", values.keyword);

    if (!values.keyword || values.keyword.trim() === "") {
      toast.error("Please enter a search keyword");
      return;
    }

    try {
      const response = await axios.get(
        `https://medicart-backend.onrender.com/ecomm/api/v1/auth/search/${values.keyword}`
      );

      console.log("Search response:", response);

      if (response.data.success) {
        setValues({ ...values, results: response.data.result });
        navigate("/search");
      } else {
        console.log("Search API failed:", response.data.message);
        toast.error("No product found");
      }
    } catch (error) {
      console.error("Error in search API:", error.response || error.message || error);
      toast.error("Something went wrong during search");
    }
  };

  return (
    <div className="flex items-center justify-center p-2 lg:w-96 w-full">
      <form
        onSubmit={handleSubmit}
        className="flex w-full backdrop-blur-md bg-white/20 shadow-md rounded-full overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-green-500 transition-all"
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-5 py-2 text-gray-800 placeholder-white-500 bg-transparent focus:outline-none"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          type="submit"
          className="px-5 py-2 text-gray-900 bg-white hover:bg-green-100 transition-colors duration-200"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Searchinput;
