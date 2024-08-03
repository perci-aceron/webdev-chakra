import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FrequentlyAsked() {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        maxW="xl"
        width="100%"
        pb={8}
      >
        <Stack spacing={4} align="center" py={8}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Frequently Asked Questions
          </Heading>
        </Stack>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Will my website be mobile-friendly?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Yes, we design all our websites to be fully responsive and
                mobile-friendly.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Do you offer SEO services?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                We provide expert SEO solutions to increase your website's
                search engine ranking and drive more organic traffic.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Can you help with website content?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Absolutely! We have a team of skilled content writers who can
                create engaging and relevant content for your site.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Will my website be mobile-friendly?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Yes, we design all our websites to be fully responsive and
                mobile-friendly.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Do you provide E-Commerce solutions?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Yes, we specialize in developing robust e-commerce platforms
                tailored to your business needs.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">
                What is your website development process?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Our process includes discovery, planning, design, development,
                testing, and launch. We partner with you every step of the way
                to bring your ideas to life.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">
                Can you integrate third-party services and tools?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Yes, we can integrate various third-party services and tools
                such as payment gateways, CRM systems, and marketing automation
                platforms.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">How do you handle website security?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                We implement advanced security measures including SSL
                certificates, regular updates, malware scanning, and secure
                coding practices.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Will my website be optimized for speed?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Yes, we focus on performance optimization to ensure your website
                loads quickly and efficiently.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Can you redesign my existing website?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Yes, we offer website redesign services to update and improve
                your current site.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">
                What if I need additional features in the future?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Our websites are built to be scalable, allowing for easy
                addition of new features as your business grows.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Do you offer website hosting services?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                Yes, we provide reliable and secure hosting solutions tailored
                to your needs.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">
                How will I track the performance of my website?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                We integrate analytics tools to help you monitor your website’s
                performance and gain insights into visitor behavior.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">
                What if I’m not satisfied with the website?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                We work closely with you throughout the project to ensure your
                satisfaction and make necessary revisions to meet your
                expectations.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">
                How do you ensure my website reflects my brand?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.500">
                We conduct thorough research and collaborate with you to
                understand your brand, ensuring the design and content align
                with your brand identity.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
