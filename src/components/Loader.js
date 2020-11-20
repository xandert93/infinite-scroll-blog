import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import usePostsFetchMore from "../customHooks/usePostsFetchMore";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);
  let { dispatch } = useContext(GlobalContext);
  usePostsFetchMore(dispatch);

  return (
    <div className={`loader ${showLoader && "show"}`}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Loader;
