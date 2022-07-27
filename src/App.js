//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// importing all of the components
import NavSignedIn from './components/Header/NavSignedIn';
import NavSignedOut from './components/Header/NavSignedOut';
import About from './components/Main/About';
import Footer from './components/Footer/Footer'
import HomePageSignedOut from './components/Main/HomePageSignedOut';
import HomePageSignedIn from './components/Main/HomePageSignedIn'
import BlogDetails from './components/Main/BlogDetails';

function App() {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<div className='bg-color'>
			<header>{signedIn ? <NavSignedIn /> : <NavSignedOut />}</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePageSignedOut />} />
					<Route path='/home' element={<HomePageSignedIn />}/>
					<Route path='/about' element={<About/>}/>
					<Route path='blog/:details' element={<BlogDetails/>}/>
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
