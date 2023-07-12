import { Flex, Input } from "@chakra-ui/react"
import theme from "../../theme"
import DefaultBtn from "../common/defaultBtn/DefaultBtn"
import { useAppDispatch } from "../../store/reduxHook"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { addTodo } from "../../store/redusers/todoSlice";


const CreateTodoForm = () =>{

  const [task, setTask] = useState<string>('');

  const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const dispatch = useAppDispatch();

  const handleAddTask = () =>{
    if(task) {
      const todo = {
        todo: task,
        id: uuidv4(),
      }
      dispatch(addTodo(todo))
      setTask('')
    }
  }

  return(
    <Flex
      width={'100%'}
      padding={"20px"}
      border={`1px solid ${theme.colors.purple}`}
      bg={theme.colors.purple}
      borderRadius={"10px"}
      gap={6}
    >
      <Input onChange={handleTask} value={task} variant={'flusheds'} placeholder="Add new task" width={"100%"} />
      <DefaultBtn value={"Add task"} func={handleAddTask}/>
    </Flex>
  )
}

export default CreateTodoForm