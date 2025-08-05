import { useEffect, useState } from "react";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("div[id], section[id], main[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return activeSection;
};

export default useActiveSection;
