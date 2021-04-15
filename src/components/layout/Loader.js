import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

const Loader = ({ inputNode, postNode } = null) => {
  let { filteredPosts, fetchPosts } = useContext(globalContext);
  const [showLoader, setShowLoader] = useState(true);

  console.log(inputNode, postNode);

  useEffect(() => {
    let check = ![0, 100].includes(filteredPosts.length) && !inputNode.value;
    if (check) {
      const observer = new IntersectionObserver(
        ([firstEntry]) => {
          if (firstEntry.isIntersecting) {
            observer.unobserve(postNode);
            fetchPosts();
          }
        },
        { threshold: 1 }
      );
      observer.observe(postNode);
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
