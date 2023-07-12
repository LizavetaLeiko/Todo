export interface IDefaultInput{
	value: string,
	changeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void,
	keydownFunc?: () => void,
	placeholder?: string
}