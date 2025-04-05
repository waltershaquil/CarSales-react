import { Link } from "react-router-dom";

function CarReg({
  make,
  setMake,
  model,
  setModel,
  mileage,
  setMileage,
  year,
  setYear,
  handleSubmit,
}) {
  return (
    <div className="bg-[#f2f2f2] w-full h-screen flex flex-col items-center justify-center">
      <div className="items-center flex flex-col py-6 bg-white w-[350px] shadow-xl rounded-xl min-h-[300px]">
        <div>
          <h1 className="text-black text-3xl pb-4 font-bold">Car Register</h1>
        </div>
        <form
          className="flex flex-col gap-1 space-y-2 min-w-[100%] text-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="px-2 py-1 w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Make"
          />
          <input
            className="px-2 py-1 w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Model"
          />
          <input
            className="px-2 py-1  w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            placeholder="Mileage"
          />
          <input
            className="px-2 py-1 w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
          />
          <button
            className="px-2 py-1 w-[80%] bg-[#141414] text-white rounded-lg outline-black outline-2 outline-solid"
            type="submit"
          >
            Submit
          </button>
        </form>
        <Link className="text-[#3d3d3d]" to="/CarList">
          List all cars
        </Link>
      </div>
    </div>
  );
}

export default CarReg;
