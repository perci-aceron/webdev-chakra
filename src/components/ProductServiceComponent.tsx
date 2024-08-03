import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Define your feature data
const features = [
  {
    id: 1,
    title: "Expertise with a Personal Touch",
    text: "Our team combines professional skill with a genuine dedication to understanding and addressing your unique needs, ensuring personalized solutions that resonate with your vision.",
  },
  {
    id: 2,
    title: "Innovative Solutions",
    text: "We leverage cutting-edge technology to deliver innovative solutions that drive efficiency and growth, helping you stay ahead in a competitive market.",
  },
  {
    id: 3,
    title: "Customized Solutions Just for You",
    text: "We dive deep into your specific requirements, crafting bespoke strategies that align perfectly with your business goals and aspirations.",
  },
  {
    id: 4,
    title: "Customer-Centric Approach",
    text: "We prioritize our clients' needs and preferences, ensuring that our services are tailored to provide maximum value and satisfaction.",
  },
  {
    id: 5,
    title: "Comprehensive Support",
    text: "From initial consultation to ongoing support, we are here to assist you at every step, ensuring smooth implementation and continued success.",
  },
  {
    id: 6,
    title: "Dependable and Timely Delivery",
    text: "We pride ourselves on being a reliable partner, consistently meeting deadlines and ensuring smooth project execution to keep your plans on track",
  },
  {
    id: 7,
    title: "Transparent and Collaborative Partnership",
    text: "We believe in fostering an open dialogue and working side by side with you to bring your ideas to life, ensuring clarity and alignment throughout the process.",
  },
  {
    id: 8,
    title: "Global Reach",
    text: "Our global presence allows us to offer our expertise and services to clients worldwide, ensuring a broad impact and diverse perspective.",
  },
];

export default function ProductService() {
  return (
    <Box p={10}>
      {/* Heading section */}
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Why Choose Us
        </Heading>
      </Stack>

      {/* Features grid */}
      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.500"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
