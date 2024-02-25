import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button onClick={scrollToTop}>
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #00CF5D;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00ab48;
  }

  &:focus {
    outline: none;
  }

  svg {
    vertical-align: middle;
  }
`;

export default ScrollToTopButton;
