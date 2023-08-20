import React, { useEffect, useState } from "react";
import "./TopBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const TopBtn = () => {
  // const iconAwsome = <FontAwesomeIcon icon={faChevronUp} />;
  const [showButton, setShowButton] = useState(false);

  const handleScrollButton = () => {
    window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollButton);

    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop}>
          <button className="btn-top" >Back to top <FontAwesomeIcon icon={faChevronUp} /></button>
        </div>
      )}
    </>
  );
};

export default TopBtn;
