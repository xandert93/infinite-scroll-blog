import usePostsFetchMore from "../customHooks/usePostsFetchMore";

const Loader = () => {
  let [showLoader] = usePostsFetchMore();
  return (
    <div className={`loader ${showLoader && "show"}`}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Loader;
