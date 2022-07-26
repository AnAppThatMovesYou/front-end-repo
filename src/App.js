//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// importing all of the components
import NavSignedIn from './components/header/NavSignedIn';
import NavSignedOut from './components/header/NavSignedOut';
import About from './components/main/About';

function App() {
	const [signedIn, setSignedIn] = useState(false);
	return (
		<>
			<header>{signedIn ? <NavSignedIn /> : <NavSignedOut />}</header>
		</>
	);
}

export default App;
