import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

interface FeatureProps {
  text: string;
}

const Feature = ({ text }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
      ></Flex>
      <Text fontSize={"xl"} fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};

export default function AboutUs() {
  return (
    <Container maxW={"100vh"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.500")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            A community to connect, share ideas, and learn from one another.
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            We are a group of like minded-individuals who are passionate about
            all things related to digital marketing. Whether you're a seasoned
            pro or just getting started, our community is here to help you
            navigate the ever-changing landscape of online advertising, social
            media marketing, email campaigns, and more. Whether you're looking
            to build your brand, increase your online visibility, or drive more
            traffic to your website, our community is here to support you every
            step of the way.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              text={
                "Our vision is to be the leading all-in-one marketing community that transforms businesses and drives success through effective and well-planned strategies. Leveraging on the tenures of community members and consistent training, we aim to build a Long-lasting partnership with our clients."
              }
            />
            <Feature
              text={
                "Our mission is to empower start-ups and scaling businesses achieve their digital marketing goals through a strong Team of experts that are committed to deliver measurable results online."
              }
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            alt={"group in meeting"}
            src={"/community.jpg"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
