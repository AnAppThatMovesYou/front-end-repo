import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function NavSignedIn({ setSignedIn, signedIn }) {
	let navigate = useNavigate();
	function handleSignedin(event) {
		event.preventDefault();
		setSignedIn(true);
		if (event.target.id === 'create') {
			navigate('/createblog');
		} else if (event.target.id === 'discover') {
			navigate('/home');
		} else if (event.target.id === 'about') {
			navigate('/about');
		}
	}

	function handleSignedOut(event) {
		event.preventDefault();
		setSignedIn(false);
		localStorage.removeItem('LogInJwt');
		navigate('/');
	}
	return (
		<div>
			<nav class='navbar navbar-expand-lg signed-in shadow-lg default-font'>
				<div class='container-fluid real-navbar'>
					<Link class='navbar-brand' to='/home'>
						<img
							src={require('../../images/MovingCo-logos_transparent.png')}
							alt=''
							className='logo'
						/>
					</Link>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li class='nav-item'>
								<a
									class='nav-link'
									href='#'
									id='discover'
									onClick={handleSignedin}>
									Discover
								</a>
							</li>
							<li class='nav-item'>
								<a
									class='nav-link'
									href='/createblog'
									id='create'
									onClick={handleSignedin}>
									Create Blog
								</a>
							</li>
							<li className='nav-item'>
								<a
									href=''
									className='nav-link'
									id='about'
									onClick={handleSignedin}>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='/profile'
									className='nav-link'
									id='about'
									onClick={handleSignedin}>
									Profile
								</a>
							</li>
							<li className='nav-item'>
								<a
									href=''
									className='nav-link'
									id='signout'
									onClick={handleSignedOut}>
									Sign out
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavSignedIn;
