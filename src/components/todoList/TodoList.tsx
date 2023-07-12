import { Flex } from "@chakra-ui/react";
import Todo from "../todo/Todo";
import { IToDo } from "../../interfaces/ITodo";
import { useAppSelector } from "../../store/reduxHook";
import theme from "../../theme";

const TodoList = () => {

  const todos: IToDo[] = useAppSelector((state) => state);

  return (
    <Flex
      justify={"center"}
      align={"center"}
      direction={"column"}
      width={"50%"}
      padding={"20px"}
      border={`1px solid ${theme.colors.purple}`}
      borderRadius={"10px"}
      gap={2}
    >
      {todos.map((item: IToDo) => {
        return (
          <Todo key={item.id} todo={item.todo} id={item.id} />
        );
      })}
    </Flex>
  );
};

export default TodoList;
