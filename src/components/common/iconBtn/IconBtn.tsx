import { IconButton } from '@chakra-ui/react';
import theme from '@theme';
import { IIconBtn } from '@interfaces';

const IconBtn = (props: IIconBtn) => {
	return (
		<IconButton
			onClick={props.func}
			color={theme.colors.purple}
			variant={'ghost'}
			icon={props.icon}
			aria-label={'delete'}
			_hover={{
				backgroundColor: `${theme.colors.lightPurple}`,
			}}
		/>
	);
};

export default IconBtn;
