import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h3>The Zerodha Universe</h3>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "25%" }} />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "13px" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "30%" }} />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "13px" }}
          >
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine
            <br /> data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "30%" }} />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "13px" }}
          >
            Systematic trading platform <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "30%" }}
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "13px" }}
          >
            Thematic investing platform <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{ width: "30%" }} />
          <p
            className="text-small text-muted mt-3"
            style={{ fontSize: "13px" }}
          >
            Investment research platform
            <br /> that offers detailed insights on stocks,
            <br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "30%" }} />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "13px" }}
          >
            Personalized advice on life <br />
            and health insurance. No spam
            <br /> and no mis-selling.
          </p>
        </div>
        <button
          className="mt-2 p-1 btn btn-primary mb-5 mt-5 fs-5"
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

export default Universe;
