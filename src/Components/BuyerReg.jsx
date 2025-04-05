import { Link } from "react-router-dom";

function BuyerReg({
  name,
  setName,
  address,
  setAddress,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmitBuyer,
}) {
  return (
    <div className="bg-[#f2f2f2] w-full h-screen flex flex-col items-center justify-center">
      <div className="items-center flex flex-col py-6 bg-white w-[350px] shadow-xl rounded-xl min-h-[300px]">
        <div>
          <h1 className="text-black text-3xl pb-4 font-bold">Register Buyer</h1>
        </div>
        <form
          className="flex flex-col gap-1 space-y-2 min-w-[100%] text-center items-center"
          onSubmit={handleSubmitBuyer}
        >
          <input
            className="px-2 py-1 w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className="px-2 py-1 w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <input
            className="px-2 py-1  w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone"
          />
          <input
            className="px-2 py-1 w-[80%] rounded-lg outline-[#898989] outline-2 outline-solid"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <button
            className="px-2 py-1 w-[80%] bg-[#141414] text-white rounded-lg outline-black outline-2 outline-solid"
            type="submit"
          >
            Submit
          </button>
        </form>
        <Link className="text-[#3d3d3d]" to="/BuyerList">
          List all Buyers
        </Link>
      </div>
    </div>
  );
}
export default BuyerReg;
