import './HomePageSignedOut.css';
import { useNavigate } from 'react-router-dom';

function HomePageSignedOut(props) {
	let navigate = useNavigate();
	function handleSignup(event) {
		event.preventDefault();
		navigate('/signup');
	}
	function handleSignin(event) {
		event.preventDefault();
		navigate('/signin');
	}

	return (
		<div className='signup-form container d-flex flex-column justify-content-center pb-5 gap-5'>
			<div className='container-fluid w-100'>
				<p className='playfair text-out'>
					An App
					<br />
					That
					<br />
					Moves You
				</p>
				<div className='w-40'></div>
			</div>
			<div className='container-fluid text-center vollkorn btn-container'>
				<button onClick={handleSignup} className='btn'>
					Sign Up
				</button>
				<button onClick={handleSignin} className='btn'>
					Sign In
				</button>
			</div>
		</div>
	);
}

export default HomePageSignedOut;
