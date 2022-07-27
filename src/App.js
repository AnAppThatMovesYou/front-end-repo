//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// importing all of the components
import NavSignedIn from './components/Header/NavSignedIn';
import NavSignedOut from './components/Header/NavSignedOut';
import About from './components/Main/About';
import Footer from './components/Footer/Footer'
import HomePageSignedOut from './components/Main/HomePageSignedOut';

function App() {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<div className='bg-color'>
			<header>{signedIn ? <NavSignedIn /> : <NavSignedOut />}</header>
			<main className=''>
				<Routes>
					<Route path='/' element={<HomePageSignedOut />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
