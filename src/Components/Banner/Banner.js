import React from "react";

const Banner = () => {
  return (
    <div
      className="img-fluid d-flex  align-items-center justify-content-center"
      style={{
        height: "80vh",
        backgroundAttachment: " fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1528127269322-539801943592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")`,
      }}
    >
      <div>
        <h1
          className="text-light text-center text-capitalize my-4 "
          style={{ fontSize: "3.2rem" }}
        >
          Let's Make your best <br /> trip ever
        </h1>
        <h5 className="    text-light  text-center" style={{ color: "gray" }}>
          Plan and Book your Perfect trip with expert advice. travel tips.
          destination <br /> information and inspiration from us
        </h5>
      </div>
    </div>
  );
};

export default Banner;
