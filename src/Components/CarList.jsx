import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://spring-carsales-walter-2.onrender.com/api/cars"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div className="bg-[#f2f2f2] h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center shadow-xl rounded-xl py-4 bg-white min-h-[350px] w-[350px]">
        <h1 className="text-2xl font-bold mb-4">List of Cars</h1>
        {cars.length > 0 ? (
          <ul className="space-y-2">
            {cars.map((car) => (
              <li key={car.id} className="border p-2 rounded w-70">
                <p>
                  <span className="font-semibold">Make:</span> {car.make}
                </p>
                <p>
                  <span className="font-semibold">Model:</span> {car.model}
                </p>
                <p>
                  <span className="font-semibold">Year:</span> {car.year}
                </p>
                <p>
                  <span className="font-semibold">Mileage:</span> {car.mileage}{" "}
                  Km
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No cars available.</p>
        )}
        <Link className="mt-4 inline-block text-blue-500" to="/CarReg">
          Register a car
        </Link>
      </div>
    </div>
  );
}

export default CarList;
