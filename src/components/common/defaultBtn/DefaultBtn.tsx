import { Button } from '@chakra-ui/react';
import theme from '@theme';
import { IDefaultBtnProps } from '@interfaces';

const DefaultBtn = (props: IDefaultBtnProps) => {
	return (
		<Button
			onClick={props.func}
			variant="outline"
			fontWeight={'500'}
			color={theme.colors.white}
			fontSize={{ base: '14px', sm: '16px' }}
			_hover={{
				color: `${theme.colors.purple}`,
				backgroundColor: `${theme.colors.white}`,
			}}
			_active={{
				backgroundColor: `${theme.colors.lightPurple}`,
			}}
		>
			{props.value}
		</Button>
	);
};

export default DefaultBtn;
