import Marquee from "react-fast-marquee";
import { Stack, Heading } from "@chakra-ui/react";

const companyLogos = [
  { src: "/pepsi.png", alt: "pepsi logo" },
  { src: "/shopee.png", alt: "shopee logo" },
  { src: "/shopeeFood.png", alt: "shopee food logo" },
  // Add more logos as needed
];

const LogoMarquee = () => {
  return (
    <>
      <Stack spacing={0} textAlign={"center"} align={"center"} pt="40px">
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          pb={12}
        >
          Companies Who Trust Us
        </Heading>
      </Stack>
      <Marquee direction="left" pauseOnHover={true} speed={50}>
        {companyLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{
              height: "150px",
              width: "150px",
              margin: "0 20px",
              objectFit: "contain",
              background: "white",
              borderRadius: "20px",
            }}
          />
        ))}
      </Marquee>
    </>
  );
};

export default LogoMarquee;
