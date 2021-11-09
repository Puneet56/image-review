import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import tw from 'tailwind-styled-components';

const MainContainer = tw.div`absolute top-0 bottom-0 left-0 right-0
`;

const App = () => {
	return (
		<MainContainer>
			<Router>
				<Routes>
					<Route exact path='/' element={<Login />} />
					<Route exact path='/home' element={<Home />} />
				</Routes>
			</Router>
		</MainContainer>
	);
};

export default App;
