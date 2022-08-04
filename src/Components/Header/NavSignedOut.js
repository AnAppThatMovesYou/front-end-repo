import './Header.css';
import { useNavigate } from 'react-router-dom';

function NavSignedOut(props) {
	let navigate = useNavigate();

	function handleLogo(event) {
		event.preventDefault();
		navigate('/');
	}

	function handleSignUp(event) {
		event.preventDefault();
		navigate('/signup');
	}

	function handleSignIn(event) {
		event.preventDefault();
		navigate('/signin');
	}

	function handleAbout(event) {
		event.preventDefault();
		navigate('/about');
	}

	return (
		<div className='header'>
			<nav className='navbar navbar-expand-lg signed-out'>
				<div className='container-fluid real-navbar'>
					<a className='navbar-brand' href='#' onClick={handleLogo}>
						<img
							src={require('../../images/MovingCo-logos_transparent.png')}
							alt=''
							className='logo'
						/>
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0 default-font light-text-color'>
							<li className='nav-item'>
								<a className='nav-link' href='#' onClick={handleSignUp}>
									Sign up
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#' onClick={handleSignIn}>
									Sign in
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link' onClick={handleAbout}>
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavSignedOut;
