import { Input } from '@chakra-ui/react';
import { IDefaultInput } from '@interfaces';

const DefaultInput = (props: IDefaultInput) => {

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && props.keydownFunc) {
			props.keydownFunc();
		}
	};

	return (
		<Input
				fontSize={{
					base: '14px',
					md: '18px',
					sm: '16px',
				}}
				onChange={props.changeFunc}
				onKeyDown={handleKeyDown}
				value={props.value}
				variant={'flusheds'}
				placeholder={props.placeholder}
				width={'100%'}
			/>
	);
};

export default DefaultInput;