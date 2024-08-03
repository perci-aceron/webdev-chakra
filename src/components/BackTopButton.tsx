import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FcUp } from "react-icons/fc";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <IconButton
      aria-label="Back to top"
      icon={<FcUp />}
      position="fixed"
      bottom="40px"
      right="40px"
      zIndex="1000"
      onClick={scrollToTop}
      bg={"blue.400"}
      color="white"
      _hover={{
        bg: "blue.500",
      }}
      display={isVisible ? "flex" : "none"}
    />
  );
};

export default BackToTop;
