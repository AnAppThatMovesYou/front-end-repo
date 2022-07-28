import './Form.css'

function SignInForm(props) {
    return (
			<div>
				<div className='signup-form container-fluid d-flex justify-content-center align-items-center'>
					<form className='form form-group'>
						<h1 className='default-font position-relative mb-3 text-center'>
							Sign In!
						</h1>
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
									<p className='signup-text'>Don't have an account? </p>
									<p>Sign Up</p>
								</button>
								<button className='btn w-50' type='submit'>
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