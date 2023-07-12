import {
  Box,
  Checkbox,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";
import theme from "../../theme";
import { IToDo } from "../../interfaces/ITodo";

const Todo = (props: IToDo) => {
  return (
    <Flex
      justifyContent={"space-between"}
      borderRadius={"10px"}
      border={`1px solid ${theme.colors.purple}`}
      padding={'5px'}
      width={'100%'}
    >
      <Checkbox
        size='lg'
        iconColor={theme.colors.green}
        colorScheme={theme.colors.white}
      >
        {props.task}
      </Checkbox>
      <Box>
        <IconButton
          color={theme.colors.purple}
          variant={"ghost"}
          icon={<EditIcon />}
          aria-label={"edit"}
        />
        <IconButton
          color={theme.colors.purple}
          variant={"ghost"}
          icon={<DeleteIcon />}
          aria-label={"delete"}
        />
      </Box>
    </Flex>
  );
};

export default Todo;
