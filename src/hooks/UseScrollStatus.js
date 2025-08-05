import { useEffect, useState } from "react";

const useScrollStatus = (onScrollCallback = () => {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
      onScrollCallback();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScrollCallback]);

  return isScrolled;
};

export default useScrollStatus;
