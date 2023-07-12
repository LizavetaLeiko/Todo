import { Flex } from "@chakra-ui/react";
import TodoList from "./components/todoList/TodoList";
import CreateTodoForm from "./components/createTodoForm/CreateTodoForm";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        gap={2}
        fontFamily={theme.fonts.body}
      >
        <CreateTodoForm/>
        <TodoList/>
      </Flex>
    </div>
  );
}

export default App;
