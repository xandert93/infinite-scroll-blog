import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const usePostsFetchMore = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let { filteredPosts } = state;
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (
      filteredPosts.length !== 0 &&
      document.querySelector("input").value === "" &&
      filteredPosts.length !== 100
    ) {
      let allPosts = document.querySelectorAll(".post-container");
      let lastPost = allPosts[filteredPosts.length - 1];
      const handleIntersection = (entries) => {
        if (entries[0].isIntersecting) {
          dispatch({ type: "GET_MORE_POSTS" });
          setShowLoader(true);
          setTimeout(setShowLoader, 500, false);
          myObserver.unobserve(lastPost);
        }
      };
      let myObserver = new IntersectionObserver(handleIntersection, {
        threshold: 1,
      });
      myObserver.observe(lastPost);
    }
  }, [filteredPosts]);

  return [showLoader];
};

export default usePostsFetchMore;
