import { Flex, Text } from '@chakra-ui/react';
import theme from '@theme';
import { IToDo } from '@interfaces';
import { useAppSelector } from '@store';
import { Todo } from '../';

const TodoList = () => {
	const todos: IToDo[] = useAppSelector((state) => [...state].reverse());

	return (
		<Flex
			justify={'center'}
			align={'center'}
			direction={'column'}
			width={'100%'}
			padding={'20px'}
			border={`1px solid ${theme.colors.purple}`}
			borderRadius={'10px'}
			bg={theme.colors.white}
			gap={2}
		>
			{todos.length > 0 ? (
				todos.map((item: IToDo) => {
					return (
						<Todo
							key={item.id}
							task={item.task}
							id={item.id}
							isDone={item.isDone}
						/>
					);
				})
			) : (
				<Text
					marginBottom={2}
					textAlign={'center'}
					color={theme.colors.purple}
					fontSize={{
						base: '24px',
						md: '32px',
						sm: '28px',
					}}
				>
					You don't have any tasks yet
				</Text>
			)}
		</Flex>
	);
};

export default TodoList;
