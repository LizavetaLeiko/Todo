import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import theme from '@theme';
import { store } from '@store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
const reduxStore = store();
root.render(
	<Provider store={reduxStore}>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</Provider>,
);
