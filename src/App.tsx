import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import theme from '@theme';
import { ContentContainer } from '@components';
import { useAppDispatch, addAllTodos } from '@store';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const todos = localStorage.getItem('todos');
		if (todos) {
			dispatch(addAllTodos(JSON.parse(todos)));
		}
	}, [dispatch]);

	return (
		<div className="App">
			<Flex justify={'center'} fontFamily={theme.fonts.body}>
				<ContentContainer />
			</Flex>
		</div>
	);
}

export default App;
