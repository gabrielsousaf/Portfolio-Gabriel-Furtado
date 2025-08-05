// src/hooks/useTypedText.js
import { useEffect } from "react";
import Typed from "typed.js";

const UseTypedText = (selector, strings, options = {}) => {
  useEffect(() => {
    const typed = new Typed(selector, {
      strings,
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      ...options,
    });

    return () => {
      typed.destroy();
    };
  }, [selector, strings, options]);
};

export default UseTypedText;
