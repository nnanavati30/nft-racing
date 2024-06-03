import React from "react";
import backgroundImage from "../assets/background_1.jpg";

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-3xl font-bold font-bangers relative top-[-5rem]">
        NFT Racing
      </h1>
    </div>
  );
};

export default HomePage;
