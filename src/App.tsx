import { Flex } from "@chakra-ui/react";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
      >
        <TodoList/>
      </Flex>
    </div>
  );
}

export default App;
