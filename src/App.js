import Login from './pages/Login';

import tw from 'tailwind-styled-components';

const MainContainer = tw.div`absolute top-0 bottom-0 left-0 right-0
`;

const App = () => {
	return (
		<MainContainer>
			<Login />
		</MainContainer>
	);
};

export default App;
