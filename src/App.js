//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// importing all of the components
import NavSignedIn from './Components/Header/NavSignedIn';
import NavSignedOut from './Components/Header/NavSignedOut';
import About from './Components/Main/About';
import HomePageSignedOut from './Components/Main/HomePageSignedOut';
import HomePageSignedIn from './Components/Main/HomePageSignedIn';
import BlogDetails from './Components/Main/BlogDetails';
import FooterSignedOut from './Components/Footer/FooterSignedOut';
import FooterSignedIn from './Components/Footer/FooterSignedIn';
import SignUpForm from './Components/Main/SignUpForm';
import SignInForm from './Components/Main/SignInForm';

function App() {
	// INITIAL STATE SETUPS

	// Initial Sign Up State:
	const initialSignUp = {
		username: '',
		password: '',
		userRole: {
			name: 'ROLE_USER',
		},
	};

	// Initial Log in State:
	const initialLogIn = {
		username: '',
		password: '',
	};

	// STATE SET UPS
	const [signedIn, setSignedIn] = useState(false);

	// All states associated with signUp
	const [signUp, setSignUp] = useState(initialSignUp);
	const [signUpJwt, setSignUpJwt] = useState('');

	// All states associated with LogIn
	const [logIn, setLogIn] = useState(initialLogIn);
	const [LogInJwt, setLogInJwt] = useState('');

	return (
		<div className='bg-color'>
			<header>{signedIn ? <NavSignedIn /> : <NavSignedOut />}</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePageSignedOut />} />
					<Route path='/home' element={<HomePageSignedIn />} />
					<Route
						path='/signup'
						element={
							<SignUpForm
								signUp={signUp}
								setSignUp={setSignUp}
								initialSignUp={initialSignUp}
								signUpJwt={signUpJwt}
								setSignUpJwt={setSignUpJwt}
							/>
						}
					/>
					<Route
						path='/signin'
						element={
							<SignInForm
								logIn={logIn}
								setLogIn={setLogIn}
								initialLogIn={initialLogIn}
								LogInJwt={LogInJwt}
								setLogInJwt={setLogInJwt}
								signUpJwt={signUpJwt}
							/>
						}
					/>
					<Route path='/about' element={<About />} />
					<Route path='blog/:details' element={<BlogDetails />} />
				</Routes>
			</main>
			<footer>{signedIn ? <FooterSignedIn /> : <FooterSignedIn />}</footer>
		</div>
	);
}

export default App;
