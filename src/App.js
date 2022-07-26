//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// importing all of the components
import NavSignedIn from './components/Header/NavSignedIn';
import NavSignedOut from './components/Header/NavSignedOut';
import About from './components/Main/About';
import Footer from './components/Footer/Footer'

function App() {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<>
			<header>{signedIn ? <NavSignedIn /> : <NavSignedOut />}</header>
			<main>

			</main>
			<footer>
				<Footer/>
			</footer>
		</>
	);
}

export default App;
