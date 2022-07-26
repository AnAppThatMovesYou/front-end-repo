import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavSignedIn({ setSignedIn, signedIn, setInputQuery }) {
	let navigate = useNavigate();

	const initialFormState = {
		input: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	function handleSignedin(event) {
		event.preventDefault();
		setSignedIn(true);
		if (event.target.id === 'create') {
			navigate('/createblog');
		} else if (event.target.id === 'discover') {
			navigate('/home');
		} else if (event.target.id === 'about') {
			navigate('/about');
		} else if (event.target.id === 'profile') {
			navigate('/profile');
		}
	}

	function handleSignedOut(event) {
		event.preventDefault();
		setSignedIn(false);
		localStorage.clear();
		navigate('/');
	}

	function handleChange(event) {
		setFormState({ ...formState, input: event.target.value });
		setInputQuery(event.target.value);
	}
	return (
		<div>
			<nav class='navbar navbar-expand-lg signed-in shadow-lg default-font'>
				<div class='container-fluid real-navbar'>
					<div>
						<Link class='navbar-brand' to='/home'>
							<img
								src={require('../../images/MovingCo-logos_transparent.png')}
								alt=''
								className='logo'
							/>
						</Link>
						<input
							type='text'
							name='search bar'
							id='search-bar'
							onChange={handleChange}
							value={formState.input}
							className='search-input'
						/>
						<label htmlFor='search-bar' className='search signedout-btn'>
							Search
						</label>
					</div>
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
									id='profile'
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
