import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="" id="rightLinks">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 p-3">
          <h1 className="fs-4 mb-5">
            Search for an answer or browse help topics <br /> to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected?" />
          <br />
          <a href="" id="leftLinks">
            Track account opening
          </a>
          <a href="" id="leftLinks">
            Track segment activation
          </a>
          <br />
          <a href="" id="leftLinks">
            Intraday margins
          </a>
          <a href="" id="leftLinks">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-4 ms-5 mb-4">Featured</h1>
          <ol>
            <li id="listItems">
              <a href="" id="rightLinks">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li id="listItems">
              <a href="" id="rightLinks">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
