import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  FcAndroidOs,
  FcAssistant,
  FcSettings,
  FcParallelTasks,
  FcSmartphoneTablet,
  FcShop,
} from "react-icons/fc";

// Card component
import React, { ReactNode } from "react";

interface CardProps {
  heading: string;
  description: ReactNode;
  icon: ReactNode;
  href: string;
}

const Card: React.FC<CardProps> = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      textAlign="center"
    >
      <Stack align={"center"} spacing={4}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
          mx="auto"
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button
          as="a"
          href={href}
          variant={"link"}
          colorScheme={"blue"}
          size={"sm"}
        >
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

// FeaturesList component
export default function FeaturesList() {
  return (
    <Box py={4} pt={10}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          What We Do
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "lg" }}>
          Boost your online presence with our all-encompassing website
          solutions, designed to elevate your brand to new heights.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Custom Website Development"}
            icon={<Icon as={FcParallelTasks} w={10} h={10} />}
            description={
              <Box>
                <List spacing={3}>
                  <ListItem>
                    Tailored solutions that align with your business goals and
                    brand identity.
                  </ListItem>
                  <ListItem>
                    Technologies: React, Angular, Vue.js, Node.js, etc.
                  </ListItem>
                </List>
              </Box>
            }
            href={"#"}
          />
          <Card
            heading={"Responsive Design"}
            icon={<Icon as={FcSmartphoneTablet} w={10} h={10} />}
            description={
              <Box>
                <List spacing={3}>
                  <ListItem>
                    Ensures optimal user experience across all devices.
                  </ListItem>
                  <ListItem>Mobile-first design approach.</ListItem>
                </List>
              </Box>
            }
            href={"#"}
          />
          <Card
            heading={"Website Maintenance & Support"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              <Box>
                <List spacing={3}>
                  <ListItem>
                    Ongoing maintenance to keep your website running smoothly.
                  </ListItem>
                  <ListItem>
                    Urgent support to handle any issues promptly.
                  </ListItem>
                </List>
              </Box>
            }
            href={"#"}
          />
          <Card
            heading={"Web Application Development"}
            icon={<Icon as={FcAndroidOs} w={10} h={10} />}
            description={
              <Box>
                <List spacing={3}>
                  <ListItem>
                    Custom web applications that streamline business processes.
                  </ListItem>
                  <ListItem>
                    Focus on user-centric design and functionality.
                  </ListItem>
                </List>
              </Box>
            }
            href={"#"}
          />
          <Card
            heading={"E-Commerce Solutions"}
            icon={<Icon as={FcShop} w={10} h={10} />}
            description={
              <Box>
                <List spacing={3}>
                  <ListItem>
                    Scalable platforms to boost your online sales.
                  </ListItem>
                  <ListItem>
                    Integration with major e-commerce tools like Shopify,
                    WooCommerce, Magento.
                  </ListItem>
                </List>
              </Box>
            }
            href={"#"}
          />
          <Card
            heading={"Content Management Systems (CMS)"}
            icon={<Icon as={FcSettings} w={10} h={10} />}
            description={
              <Box>
                <List spacing={3}>
                  <ListItem>
                    Easy-to-use platforms that allow for simple content updates.
                  </ListItem>
                  <ListItem>
                    Expertise in WordPress, Joomla, Drupal, etc.
                  </ListItem>
                </List>
              </Box>
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
