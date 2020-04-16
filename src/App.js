import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';



const App = () => {
	return (
		// <BrowserRouter>
		// 	{/* <Dashboard /> */}
		// 	<NoSurvey/>
		// </BrowserRouter>
		<Routes />
	);
}

export default App;
