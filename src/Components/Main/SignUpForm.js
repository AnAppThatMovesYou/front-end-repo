import './Form.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpForm({
	signUp,
	setSignUp,
	signUpJwt,
	setSignUpJwt,
	signedIn,
	setSignedIn,
}) {
	const navigate = useNavigate();
	const [usernameExists, setUsernameExists] = useState(false);

	function handleChange(event) {
		setSignUp({
			...signUp,
			[event.target.id]: event.target.value,
		});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		await setSignUp(signUp);

		try {
			const response = await axios.post(
				'https://movingco.herokuapp.com/signup',
				signUp
			);
			// console.log('RESPONSE', response);

			if (response.status === 200) {
				setSignUpJwt(response.data.token);
				setSignedIn(true);
				setUsernameExists(false);
				localStorage.setItem('LogInJwt', response.data.token);
				navigate('/signin');
			}
		} catch (error) {
			console.log(error);
			setUsernameExists(true);
		}
	};

	function handleSignin(event) {
		event.preventDefault();
		navigate('/signin');
	}
	return (
		<div className='signup-form container-fluid d-flex justify-content-center align-items-center'>
			<form
				className='form form-group shadow-lg d-flex flex-column justify-content-center align-items-center gap-3'
				onSubmit={handleSubmit}>
				<h1 className='position-relative mb-3 text-center title-text default-font'>
					Sign Up
				</h1>
				<input
					id='username'
					type='email'
					className='form-control position-relative mb-1 input'
					placeholder='Email'
					value={signUp.username}
					onChange={handleChange}
				/>
				<input
					id='password'
					type='password'
					className='form-control position-relative mb-1 input'
					placeholder='Password'
					value={signUp.password}
					onChange={handleChange}
				/>

				{/* <input
					type='email'
					className='form-control position-relative mb-1 input'
                    placeholder='Email'
				/> */}
				{usernameExists ? (
					<div className='username-taken'>
						This email already has an account!{' '}
					</div>
				) : (
					''
				)}
				{/* <div>Username already exists</div> */}

				<div className='button-container'>
					<div className='d-flex flex-row'>
						<button className='btn w-50' type='button' onClick={handleSignin}>
							<p className='signup-text'>Already have an account? Sign in!</p>
						</button>
						<button className='btn' type='submit'>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignUpForm;
