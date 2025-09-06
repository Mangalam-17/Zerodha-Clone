import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="hero_image"
          style={{ width: "95%" }}
          className="mb-3 ms-4"
        />
        <h1 className="mt-3 fs-3">Invest in Everything </h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.{" "}
        </p>

        <button
          className="mt-2 p-1 btn btn-primary mb-5 fs-5"
          style={{
            width: "24%",
            height: "50px",
            fontWeight: "700",
            margin: "0 auto",
            backgroundColor: "#387ed1",
          }}
        >
          {" "}
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
