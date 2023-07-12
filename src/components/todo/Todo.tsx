import { useState } from 'react';
import { Checkbox, Flex, Text } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import theme from '@theme';
import { IToDo } from '@interfaces';
import {
	useAppDispatch,
	deleteTodo,
	editTodo,
	toggleCheckboxTodo,
} from '@store';
import { DefaultInput, IconBtn } from '../';

const Todo = (props: IToDo) => {
	const [isEditable, setIsEditable] = useState<boolean>(false);
	const [newValue, setNewValue] = useState<string>(props.task);

	const dispatch = useAppDispatch();

	const handleDeleteTask = (id: string) => {
		dispatch(deleteTodo(id));
	};

	const handleNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewValue(event.target.value);
	};

	const handleEditTask = () => {
		const newTodo = {
			task: newValue,
			isDone: props.isDone,
			id: props.id,
		};
		dispatch(editTodo(newTodo));
		setIsEditable(false);
	};

	const handleToggleIsDone = (id: string) => {
		dispatch(toggleCheckboxTodo(id));
	};

	return (
		<Flex
			justifyContent={'space-between'}
			borderRadius={'10px'}
			border={`1px solid ${
				props.isDone ? theme.colors.green : theme.colors.red
			}`}
			padding={'5px 10px'}
			width={'100%'}
			gap={2}
		>
			{isEditable ? (
				<DefaultInput
					value={newValue}
					changeFunc={handleNewTask}
					keydownFunc={handleEditTask}
				/>
			) : (
				<Checkbox
					spacing={3}
					size="lg"
					iconColor={theme.colors.green}
					colorScheme={theme.colors.white}
					isChecked={props.isDone}
					onChange={() => handleToggleIsDone(props.id)}
				>
					<Text
						fontSize={{
							base: '14px',
							md: '18px',
							sm: '16px',
						}}
					>
						{props.task}
					</Text>
				</Checkbox>
			)}
			<Flex justify={'space-around'} align={'center'} gap={2}>
				{isEditable ? (
					<IconBtn icon={<CheckIcon />} func={handleEditTask} />
				) : (
					<>
						<IconBtn icon={<EditIcon />} func={() => setIsEditable(true)} />
						<IconBtn
							icon={<DeleteIcon />}
							func={() => handleDeleteTask(props.id)}
						/>
					</>
				)}
			</Flex>
		</Flex>
	);
};

export default Todo;
