import './Form.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm({
	logIn,
	setLogIn,
	signUpJwt,
	setLogInJwt,
	logInJwt,
	signedIn,
	setSignedIn,
	profile,
	setProfile,
}) {
	const navigate = useNavigate();

	function handleChange(event) {
		setLogIn({
			...logIn,
			[event.target.id]: event.target.value,
		});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		await setLogIn(logIn);

		try {
			const response = await axios.post(
				'https://movingco.herokuapp.com/login',
				logIn
			);

			
			setLogInJwt(response.data.token);

			localStorage.setItem('LogInJwt', response.data.token);
			localStorage.setItem('logInUsername', logIn.username);
			if (response.status === 200) {
				setSignedIn(true);
				
				if (profile.email) {
					navigate('/home');
				} else {
					
					navigate('/createprofile');
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	function handleSignup(event) {
		event.preventDefault();
		navigate('/signup');
	}

	return (
		<div>
			<div className='signup-form container-fluid d-flex justify-content-center align-items-center align-items-center'>
				<form
					className='form form-group shadow-lg d-flex flex-column justify-content-center align-items-center gap-3'
					onSubmit={handleSubmit}>
					<h1 className='default-font position-relative mb-3 text-center'>
						Sign In
					</h1>
					<input
						type='text'
						id='username'
						className='form-control position-relative mb-1 input'
						placeholder='Username'
						value={logIn.username}
						onChange={handleChange}
					/>
					<input
						type='password'
						id='password'
						className='form-control position-relative mb-1 input'
						placeholder='Password'
						value={logIn.password}
						onChange={handleChange}
					/>
					<div className='button-container'>
						<div className='d-flex flex-row'>
							<button className='btn w-50' type='button' onClick={handleSignup}>
								<p className='signup-text'>Don't have an account? Sign up! </p>
							</button>
							<button className='btn' type='submit'>
								Sign In
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignInForm;
