import { Flex } from "@chakra-ui/react";
import theme from "./theme";
import ContentContainer from "./components/contentContainer/ContentContainer";
import { useAppDispatch } from "./store/reduxHook";
import { useEffect } from "react";
import { addAllTodos } from "./store/redusers/todoSlice";

function App() {

  const dispatch = useAppDispatch();

  useEffect(() =>{
    const todos = localStorage.getItem('todos') 
    if (todos){
      dispatch(addAllTodos(JSON.parse(todos)))
    } 
  }, [])

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
