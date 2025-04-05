import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BuyerList() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://spring-carsales-walter-2.onrender.com/api/buyers"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch buyers");
        }
        const data = await response.json();
        setBuyers(data);
      } catch (error) {
        console.error("Error fetching buyers:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">List of Buyers</h1>
      {buyers.length > 0 ? (
        <ul className="space-y-2">
          {buyers.map((buyer) => (
            <li key={buyer.id} className="border p-2 rounded">
              <p>
                <span className="font-semibold">id:</span> {buyer.id}
              </p>
              <p>
                <span className="font-semibold">name:</span> {buyer.name}
              </p>
              <p>
                <span className="font-semibold">address:</span> {buyer.address}
              </p>
              <p>
                <span className="font-semibold">phone:</span> {buyer.phone}
              </p>
              <p>
                <span className="font-semibold">email:</span> {buyer.email}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No buyers available.</p>
      )}
      <Link className="mt-4 inline-block text-blue-500" to="/BuyerReg">
        Register a buyer
      </Link>
    </div>
  );
}

export default BuyerList;
