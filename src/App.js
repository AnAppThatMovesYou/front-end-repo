//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// importing all of the components
import NavSignedIn from './components/Header/NavSignedIn';
import NavSignedOut from './components/Header/NavSignedOut';
import About from './components/Main/About';
import HomePageSignedOut from './components/Main/HomePageSignedOut';
import HomePageSignedIn from './components/Main/HomePageSignedIn';
import BlogDetails from './components/Main/BlogDetails';
import FooterSignedOut from './components/Footer/FooterSignedOut';
import FooterSignedIn from './components/Footer/FooterSignedIn';
import SignUpForm from './components/Main/SignUpForm';
import SignInForm from './components/Main/SignInForm';

function App() {
	const [signedIn, setSignedIn] = useState(false);

	return (
		<div className='bg-color'>
			<header>{signedIn ? <NavSignedIn /> : <NavSignedOut />}</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePageSignedOut />} />
					<Route path='/home' element={<HomePageSignedIn />} />
					<Route path='/signup' element={<SignUpForm />} />
					<Route path='/signin' element={<SignInForm />} />
					<Route path='/about' element={<About />} />
					<Route path='blog/:details' element={<BlogDetails />} />
				</Routes>
			</main>
			<footer>{signedIn ? <FooterSignedIn /> : <FooterSignedIn />}</footer>
		</div>
	);
}

export default App;
