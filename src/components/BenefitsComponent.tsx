import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel
        color={"blue.400"}
        fontSize={"xl"}
        fontWeight={"medium"}
        isTruncated
      >
        {title}
      </StatLabel>
      <StatNumber fontSize={"lg"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Benefits() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading
        textAlign={"center"}
        py={10}
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
      >
        Your <chakra.span color={"red.400"}>Problem</chakra.span>, Our{" "}
        <chakra.span color={"blue.400"}>Solution</chakra.span>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Struggling with Outdated Website Technology"}
          stat={
            "We update your website with the latest technologies and tools. Our team ensures your site benefits from modern frameworks, fast-loading features, and enhanced functionality, keeping you competitive and efficient."
          }
        />
        <StatsCard
          title={"Overwhelmed by Complex Website Management"}
          stat={
            "We streamline website management with user-friendly systems and intuitive interfaces. Our solutions make it easy for you to update content, manage features, and maintain your site without hassle, freeing up your time to focus on your business"
          }
        />
        <StatsCard
          title={"Experiencing Low Conversion Rates"}
          stat={
            "We specialize in optimizing website performance to enhance user experience and boost engagement. Our expert team focuses on improving site speed, ensuring mobile responsiveness, streamlining navigation, and implementing robust security measures. By addressing these key areas, we help your website perform at its best, keeping visitors engaged and driving conversions."
          }
        />
        <StatsCard
          title={"Struggling with Google Search Rankings and Poor SEO"}
          stat={
            "Our expert team employs advanced SEO strategies to boost your site's visibility and performance. From keyword research to high-quality backlinks, we ensure your website ranks higher and attracts more traffic."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
