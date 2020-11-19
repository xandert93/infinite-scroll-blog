import React, { useState, useEffect } from "react";

const Loader = ({ dispatch }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   console.log("evls added");
    //   const {
    //     scrollTop,
    //     scrollHeight,
    //     clientHeight,
    //   } = document.documentElement;

    //   scrollTop + clientHeight >= scrollHeight - 50 &&
    //     dispatch({ type: "GET_MORE_POSTS" });

    // setTimeout(() => setShowLoader(false), 1000);

    window.addEventListener(
      "keypress",
      (e) => e.key === "Enter" && dispatch({ type: "GET_MORE_POSTS" })
    );
  }, []);
  return (
    <div className={`loader ${showLoader && "show"}`}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Loader;
