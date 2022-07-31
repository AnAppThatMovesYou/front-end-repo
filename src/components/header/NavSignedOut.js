import './Header.css';
import { useNavigate } from 'react-router-dom';

function NavSignedOut(props) {
	let navigate = useNavigate();
	return (
		<div>
			<nav className='navbar navbar-expand-lg navbar-light bg-light signed-out'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
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
								<a className='nav-link' href='/signup'>
									Sign up
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/signin'>
									Sign in
								</a>
							</li>
							<li className='nav-item'>
								<a href='/about' className='nav-link'>
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
