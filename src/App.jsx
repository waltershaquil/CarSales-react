import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  data,
} from "react-router-dom";
import "./App.css";
import CarList from "./Components/CarList";
import CarReg from "./Components/CarReg";
import BuyerList from "./Components/BuyerList";
import BuyerReg from "./Components/BuyerReg";
import Home from "./Components/Home";
import SaleReg from "./Components/SaleReg";
import SaleList from "./Components/SaleList";
import Navbar from "./Components/NavBar";

function App() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [carId, setCarId] = useState("");
  const [buyerId, setBuyerId] = useState("");
  const [price, setPrice] = useState("");

  const createCar = (carData) => {
    fetch("https://spring-carsales-walter-2.onrender.com/api/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error creating car");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Car created", data);
        setMake("");
        setModel("");
        setMileage("");
        setYear("");
      });
  };

  const createBuyer = (buyerData) => {
    fetch("https://spring-carsales-walter-2.onrender.com/api/buyers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buyerData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error creating buyer");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Buyer Created", data);
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
      });
  };
  const createSale = async (saleData) => {
    try {
      const response = await fetch(
        "https://spring-carsales-walter-2.onrender.com/api/sales",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(saleData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create sale");
      }

      const result = await response.json();
      console.log("Sale created:", result);
      return result;
    } catch (error) {
      console.error("Error posting sale:", error);
      throw error;
    }
  };

  const handleSubmitBuyer = (e) => {
    e.preventDefault();
    const buyerData = { name, address, phone, email };
    createBuyer(buyerData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = { make, model, year, mileage };
    createCar(carData);
  };

  const handleSubmitSale = (e) => {
    e.preventDefault();

    const saleData = {
      carId,
      buyerId,
      price,
    };

    createSale(saleData)
      .then(() => {
        // Optional: reset state or show a success message
        setCarId("");
        setBuyerId("");
        setPrice("");
      })
      .catch((error) => {
        console.error("Failed to submit sale:", error);
      });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/CarReg"
          element={
            <CarReg
              make={make}
              setMake={setMake}
              model={model}
              setModel={setModel}
              mileage={mileage}
              setMileage={setMileage}
              year={year}
              setYear={setYear}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/CarList" element={<CarList />} />
        <Route path="/BuyerList" element={<BuyerList />} />
        <Route
          path="/BuyerReg"
          element={
            <BuyerReg
              name={name}
              setName={setName}
              address={address}
              setAddress={setAddress}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail}
              handleSubmitBuyer={handleSubmitBuyer}
            />
          }
        />
        <Route
          path="/SaleReg"
          element={
            <SaleReg
              carId={carId}
              setCarId={setCarId}
              buyerId={buyerId}
              setBuyerId={setBuyerId}
              price={price}
              setPrice={setPrice}
              handleSubmitSale={handleSubmitSale}
            />
          }
        />
        <Route path="/saleList" element={<SaleList />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
