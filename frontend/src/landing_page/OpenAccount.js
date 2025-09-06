import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        
        <h1 className="mt-5 fs-3">Open a Zerodha account</h1>
        <p className="mt-3 fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.{" "}
        </p>

        <button
          className="mt-3 p-1 btn btn-primary mb-5"
          style={{ width: "25%", margin: "0 auto", backgroundColor: "#387ed1" }}
        >
          {" "}
          Signup For Free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
