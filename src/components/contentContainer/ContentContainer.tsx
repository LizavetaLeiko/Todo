import { Flex, Text } from "@chakra-ui/react";
import theme from "../../theme";
import CreateTodoForm from "../createTodoForm/CreateTodoForm";
import TodoList from "../todoList/TodoList";

const ContentContainer = () => {
  return (
    <Flex
      flexDirection={"column"}
      width={{
        base: "100%",
        md: "60%",
        sm: "80%",
      }}
      padding={"20px"}
      justify={"center"}
      bg={theme.colors.lightPurple}
      borderRadius={"10px"}
      gap={3}
    >
      <Text
        marginBottom={2}
        textAlign={"center"}
        color={theme.colors.purple}
        fontSize={{ base: '24px', md: '32px', sm: '28px' }}
      >
        My tasks
      </Text>
      <CreateTodoForm />
      <TodoList />
    </Flex>
  );
};

export default ContentContainer;
