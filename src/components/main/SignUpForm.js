import './Form.css';

function SignUpForm(props) {
	return (
		<div className='signup-form container-fluid d-flex justify-content-center align-items-center'>
			<form className='form form-group'>
				<h1 className='default-font position-relative mb-3 text-center'>Sign Up!</h1>
				<input
					type='text'
					className='form-control position-relative mb-1 input'
                    placeholder='First Name'
				/>
				<input
					type='text'
					className='form-control position-relative mb-1 input'
                    placeholder='Last Name'
				/>
				<input
					type='email'
					className='form-control position-relative mb-1 input'
                    placeholder='Email'
				/>
				<input
					type='password'
					className='form-control position-relative mb-1 input'
                    placeholder='Password'
				/>
				<div className='button-container'>
					<div className='d-flex flex-row'>
						<button className='btn w-50' type='button'>
							<p className='signup-text'>Already have an account? </p>
							<p>Sign in!</p>
						</button>
						<button className='btn w-50' type='submit'>
							Sign Up
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignUpForm;
