"use client";

import {
  Box,
  VStack,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from "@chakra-ui/react";

interface FeatureProps {
  heading: string;
  text: string[];
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      {text.map((line, index) => (
        <chakra.p key={index}>{line}</chakra.p>
      ))}
    </GridItem>
  );
};

export default function Process() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      {/* Introduction */}
      <VStack spacing={4} textAlign="center">
        <chakra.h1 fontSize="4xl" fontWeight="700">
          Our Web Development Process
        </chakra.h1>
        <chakra.p fontSize="lg" color="gray.500">
          Developing a website is a multi-step process that involves planning,
          designing, developing, and launching. Here’s a detailed look at our
          comprehensive approach to ensure your website is built to perfection.
        </chakra.p>
      </VStack>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
        mt={8}
      ></Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"Planning & Research"}
          text={[
            "Requirement Gathering: Identify the website’s purpose, target audience, and key functionalities.",
            "Market Research: Analyze competitors and gather inspiration.",
            "Sitemap & Wireframes: Create a visual guide of the site's structure and layout.",
          ]}
        />
        <Feature
          heading={"Design"}
          text={[
            "Mockups & Prototypes: Develop detailed designs of the website’s pages.",
            "User Experience (UX): Ensure the site is easy to navigate and user-friendly.",
            "User Interface (UI): Design the visual elements, including colors, typography, and images.",
          ]}
        />
        <Feature
          heading={"Development"}
          text={[
            "Frontend Development: Convert designs into a functional website using HTML, CSS, and JavaScript.",
            "Backend Development: Set up server, database, and server-side applications to support the frontend.",
            "Integration: Connect the frontend and backend, ensuring smooth data flow and functionality.",
          ]}
        />
        <Feature
          heading={"Testing & Launch"}
          text={[
            "Testing: Perform functionality, usability, and performance testing. Fix any bugs or issues.",
            "Optimization: Ensure the website is optimized for speed and search engines (SEO).",
            "Launch: Deploy the website to a live server, making it accessible to the public.",
          ]}
        />
      </Grid>
    </Box>
  );
}
