import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box maxW="1440px" mx="auto" w="full" px={4}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1}>
          <Image
            alt={"group working for success"}
            objectFit={"cover"}
            src={"/heroBgImg.jpg"}
          />
        </Flex>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading as="h1" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text color={"blue.400"} as={"span"}>
                Maximize Your Business Growth with Affordable, High-Quality Web
                Development{" "}
              </Text>{" "}
            </Heading>
            <Heading as="h2">
              <Text fontSize={{ base: "xl", lg: "2xl" }} color={"gray.500"}>
                Boost Your Online Presence with SEO-Optimized Websites.
              </Text>
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Want to know how?
              </Button>
              <Button rounded={"full"}>Free Quote</Button>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}
