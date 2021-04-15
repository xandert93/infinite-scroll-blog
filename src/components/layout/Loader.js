import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';

const Loader = ({
  inputRef: { current: inputNode },
  postRef: { current: postNode },
}) => {
  let { filteredPosts, fetchPosts } = useContext(globalContext);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    console.log(postNode);
    console.log(inputNode);
  });

  // useEffect(() => {
  //   if (filteredPosts.length !== 0 || (100 && inputNode.value === '')) {
  //     const handleIntersection = ([firstEntry]) => {
  //       if (firstEntry.isIntersecting) {
  //         fetchPosts();
  //         setShowLoader(true);
  //         setTimeout(setShowLoader, 1000, false);
  //         myObserver.unobserve(postNode);
  //       }
  //     };
  //     let myObserver = new IntersectionObserver(handleIntersection, {
  //       threshold: 1,
  //     });
  //     myObserver.observe(postNode);
  //   }
  // });

  return (
    <div className={`loader ${showLoader ? 'show' : ''}`}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Loader;
