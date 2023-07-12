import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import theme from '@theme';
import { useAppDispatch, addTodo } from '@store';
import { DefaultBtn, DefaultInput } from '../';

const CreateTodoForm = () => {
	const [task, setTask] = useState<string>('');

	const dispatch = useAppDispatch();

	const handleSetTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleAddTask = () => {
		if (task) {
			const todo = {
				task: task,
				isDone: false,
				id: uuidv4(),
			};
			dispatch(addTodo(todo));
			setTask('');
		}
	};

	return (
		<Flex
			width={'100%'}
			padding={'20px'}
			border={`1px solid ${theme.colors.purple}`}
			bg={theme.colors.purple}
			borderRadius={'10px'}
			gap={3}
		>
			<DefaultInput
				value={task}
				changeFunc={handleSetTask}
				keydownFunc={handleAddTask}
				placeholder="Add new task"
			/>
			<DefaultBtn value={'Add'} func={handleAddTask} />
		</Flex>
	);
};

export default CreateTodoForm;
