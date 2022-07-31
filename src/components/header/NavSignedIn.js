import './Header.css';

function NavSignedIn(props) {
	return (
		<div>
			<nav class='navbar navbar-expand-lg navbar-light bg-light signed-out'>
				<div class='container-fluid'>
					<a class='navbar-brand' href='#'>
						<img
							src={require('../../images/MovingCo-logos_transparent.png')}
							alt=''
							className='logo'
						/>
					</a>
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
								<a class='nav-link' href='#'>
									Discover
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='/createblog'>
									Create Blog
								</a>
							</li>
							<li className='nav-item'>
								<a href='' className='nav-link'>
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

export default NavSignedIn;
