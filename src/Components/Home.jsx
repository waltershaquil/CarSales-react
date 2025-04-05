import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#f3f3f3] w-full h-screen flex flex-col items-center justify-center">
      <p className="text-2xl font-bold">Welcome</p>
      <div className="flex flex-row justify-center gap-4 bg-white rounded-xl shadow-xl py-6 px-4">
        <Link to="/CarReg">
          <button className="bg-[#323232] text-white font-semibold w-40 rounded-lg p-2 hover:shadow-amber-200 hover:shadow-lg hover:bg-amber-400">
            Cars
          </button>
        </Link>

        <Link to="/BuyerReg">
          <button className="bg-[#323232] text-white font-semibold w-40 rounded-lg p-2 hover:shadow-amber-200 hover:shadow-lg hover:bg-amber-400">
            Buyers
          </button>
        </Link>
        <Link to="/SaleReg">
          <button className="bg-[#323232] text-white font-semibold w-40 rounded-lg p-2 hover:shadow-amber-200 hover:shadow-lg hover:bg-amber-400">
            Sales
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
