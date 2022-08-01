//installing react related modules
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// importing all of the components
<<<<<<< HEAD
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
import CreateBlog from './Components/Main/CreateBlog';
=======
import NavSignedIn from './components/Header/NavSignedIn';
import NavSignedOut from './components/Header/NavSignedOut';
import About from './components/Main/About';
import HomePageSignedOut from './components/Main/HomePageSignedOut';
import HomePageSignedIn from './components/Main/HomePageSignedIn'
import BlogDetails from './components/Main/BlogDetails'
import FooterSignedOut from './components/Footer/FooterSignedOut';
import FooterSignedIn from './components/Footer/FooterSignedIn';
import SignUpForm from './components/Main/SignUpForm';
import SignInForm from './components/Main/SignInForm';
import CreateBlog from './components/Main/CreateBlog'
>>>>>>> 9d59fbe (Create edit and delete buttons for BlogDetails.js. Create CreateBlog.js and hook up route in App.js.)

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

	// State for all the current blogs
	const [currentBlogs, setCurrentBlogs] = useState([]);

	return (
		<div className='bg-color'>
			<header>
				{signedIn ? (
					<NavSignedIn signedIn={signedIn} setSignedIn={setSignedIn} />
				) : (
					<NavSignedOut signedIn={signedIn} />
				)}
			</header>
			<main>
				<Routes>
					<Route path='/' element={<HomePageSignedOut />} />
					<Route
						path='/home'
						element={
							<HomePageSignedIn
								LogInJwt={LogInJwt}
								currentBlogs={currentBlogs}
								setCurrentBlogs={setCurrentBlogs}
							/>
						}
					/>
					<Route
						path='/signup'
						element={
							<SignUpForm
								signUp={signUp}
								setSignUp={setSignUp}
								initialSignUp={initialSignUp}
								signUpJwt={signUpJwt}
								setSignUpJwt={setSignUpJwt}
								signedIn={signedIn}
								setSignedIn={setSignedIn}
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
								signedIn={signedIn}
								setSignedIn={setSignedIn}
							/>
						}
					/>
					<Route path='/about' element={<About />} />
<<<<<<< HEAD
					<Route
						path='/details'
						element={
							<BlogDetails
								currentBlogs={currentBlogs}
								setCurrentBlogs={setCurrentBlogs}
							/>
						}
					/>
					<Route
						path='/createblog'
						element={<CreateBlog logIn={logIn} LogInJwt={LogInJwt} />}
					/>
=======
					<Route path='blog/details' element={<BlogDetails />} />
					<Route path='blog/create' element={<CreateBlog/>}/>
>>>>>>> 9d59fbe (Create edit and delete buttons for BlogDetails.js. Create CreateBlog.js and hook up route in App.js.)
				</Routes>
			</main>
			<footer>{signedIn ? <FooterSignedIn /> : <FooterSignedIn />}</footer>
		</div>
	);
}

export default App;
