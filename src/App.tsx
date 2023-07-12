import { Flex } from "@chakra-ui/react";
import theme from "./theme";
import ContentContainer from "./components/contentContainer/ContentContainer";

function App() {
  return (
    <div className="App">
      <Flex
        justify={"center"}
        fontFamily={theme.fonts.body}
      >
        <ContentContainer/>
      </Flex>
    </div>
  );
}

export default App;
