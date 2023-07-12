import {
  Checkbox,
  Flex,
  Input,
} from "@chakra-ui/react";
import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";
import theme from "../../theme";
import { IToDo } from "../../interfaces/ITodo";
import IconBtn from "../common/iconBtn/IconBtn";
import { useAppDispatch } from "../../store/reduxHook";
import {
  deleteTodo,
  editTodo,
} from "../../store/redusers/todoSlice";
import { useState } from "react";

const Todo = (props: IToDo) => {
  
  const [isEditable, setIsEditable] =
    useState<boolean>(false);
  const [newValue, setNewValue] =
    useState<string>(props.task);

  const dispatch = useAppDispatch();

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTask = () => {
    const newTodo = {
      task: newValue,
      id: props.id,
    };
    dispatch(editTodo(newTodo));
    setIsEditable(false);
  };

  const handleNewTask = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewValue(event.target.value);
  };

  return (
    <Flex
      justifyContent={"space-between"}
      borderRadius={"10px"}
      border={`1px solid ${theme.colors.purple}`}
      padding={"5px 10px"}
      width={"100%"}
    >
      {isEditable ? (
        <Input
          onChange={handleNewTask}
          variant={"flusheds"}
          width={"100%"}
          value={newValue}
        />
      ) : (
        <Checkbox
          size="lg"
          iconColor={theme.colors.green}
          colorScheme={theme.colors.white}
        >
          {props.task}
        </Checkbox>
      )}
      <Flex
        justify={"space-around"}
        align={"center"}
        gap={2}
      >
        {isEditable ? (
          <IconBtn
            icon={<CheckIcon />}
            func={handleEditTask}
          />
        ) : (
          <>
            <IconBtn
              icon={<EditIcon />}
              func={() => setIsEditable(true)}
            />
            <IconBtn
              icon={<DeleteIcon />}
              func={() =>
                handleDeleteTask(props.id)
              }
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Todo;
