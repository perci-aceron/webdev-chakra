import { ChakraProvider } from "@chakra-ui/react"
import Nav from "./components/NavBarComponent"
import SplitScreen from "./components/HeroComponent"
import GridListWith from "./components/FeaturesComponent"
import WithSpeechBubbles from "./components/TestimonialComponent"
import ArticleList from "./components/BlogComponents"
import SocialProfileWithImage from "./components/TeamComponents"
import LargeWithNewsletter from "./components/FooterComponent"
import theme from "../src/styles/theme"

function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Nav />
        <SplitScreen />
        <GridListWith />
        <WithSpeechBubbles />
        <ArticleList />
        <SocialProfileWithImage />
        <LargeWithNewsletter />
      </ChakraProvider>
    </>
  )
}

export default App
