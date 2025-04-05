import React from "react";
import { Link } from "react-router-dom";

const SaleReg = ({
  carId,
  setCarId,
  buyerId,
  setBuyerId,
  price,
  setPrice,

  handleSubmitSale,
}) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register a Sale
        </h2>

        <form
          onSubmit={handleSubmitSale}
          className="flex flex-col gap-1 space-y-2 min-w-[100%] text-center items-centers"
        >
          <div>
            <input
              type="text"
              placeholder="Car id"
              value={carId}
              onChange={(e) => setCarId(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Buyer id"
              value={buyerId}
              onChange={(e) => setBuyerId(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="px-2 py-1 w-[100%] bg-[#141414] text-white rounded-lg outline-black outline-2 outline-solid"
          >
            Submit Sale
          </button>
          <Link to="/SaleList">List all Sales</Link>
        </form>
      </div>
    </div>
  );
};

export default SaleReg;
