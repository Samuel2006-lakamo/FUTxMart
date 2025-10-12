import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <>
      {" "}
      <input
        type="search"
        placeholder="Search products..."
        className="w-full border border-gray-400 rounded-full pl-10 pr-3 py-2 focus:outline-none  hover:border-purple-700 focus:border-purple-700 placeholder-gray-500 hover:border-2 focus:border-2"
      />
      <IoSearchOutline className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
    </>
  );
}

export default Search;
