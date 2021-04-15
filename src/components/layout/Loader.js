import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

const Loader = () => {
  let { filteredPosts, fetchPosts } = useContext(GlobalContext);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (
      filteredPosts.length !== 0 &&
      document.querySelector('input').value === '' &&
      filteredPosts.length !== 100
    ) {
      let allPosts = document.querySelectorAll('.post');
      let lastPost = allPosts[filteredPosts.length - 1];
      const handleIntersection = ([firstEntry]) => {
        if (firstEntry.isIntersecting) {
          setTimeout(fetchPosts);
          setShowLoader(true);
          setTimeout(setShowLoader, 1000, false);
          myObserver.unobserve(lastPost);
        }
      };
      let myObserver = new IntersectionObserver(handleIntersection, {
        threshold: 1,
      });
      myObserver.observe(lastPost);
    }
  }, [filteredPosts]);

  return (
    <div className={`loader ${showLoader ? 'show' : ''}`}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Loader;
