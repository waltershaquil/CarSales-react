import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SaleList() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://spring-carsales-walter-2.onrender.com/api/sales"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sales");
        }
        const data = await response.json();
        setSales(data); // Set sales instead of cars
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div className="bg-[#f2f2f2] h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center shadow-xl rounded-xl py-4 bg-white min-h-[350px] w-[350px]">
        <h1 className="text-2xl font-bold mb-4">List of Sales</h1>
        {sales.length > 0 ? (
          <ul className="space-y-2">
            {sales.map((sale) => (
              <li key={sale.id} className="border p-2 rounded w-70">
                <p>
                  <span className="font-semibold">Buyer:</span>{" "}
                  {sale.buyer.name}
                </p>
                <p>
                  <span className="font-semibold">Car Make:</span>{" "}
                  {sale.car.make}
                </p>
                <p>
                  <span className="font-semibold">Car Model:</span>{" "}
                  {sale.car.model}
                </p>
                <p>
                  <span className="font-semibold">Price:</span> ${sale.price}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {sale.date}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No sales available.</p>
        )}
        <Link className="mt-4 inline-block text-blue-500" to="/SaleReg">
          Register a sale
        </Link>
      </div>
    </div>
  );
}

export default SaleList;
