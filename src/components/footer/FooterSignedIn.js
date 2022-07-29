import './Footer.css';

function FooterSignedIn(props) {
	return (
		<div className='container-fluid footer p-4 pb-0'>
			<section className=''>
				<div className='d-flex justify-content-center gap-for-footer'>
					<div className='w-60'>
						<a class='navbar-brand' href='#'>
							<img
								src={require('../../images/MovingCoFooter.png')}
								alt=''
								className='footer-logo'
							/>
						</a>
						<p className='default-font text footer-slogan'>
							An App
							<br />
							That 
							<br />
							Moves You
						</p>
					</div>
					<div className='w-40 vollkorn d-flex flex-row align-items-center gap-5 links-container'>
						<div className='get-started-links d-flex flex-column'>
							<h5 className=''>Get Started</h5>
							<ul className='list-unstyled mb-0'>
								<li>
									<a href='#!' className=''>
										Sign Up
									</a>
								</li>
								<li>
									<a href='#!' className=''>
										Sign In
									</a>
								</li>
								<li>
									<a href='#!' className=''>
										About
									</a>
								</li>
							</ul>
						</div>
						<dir className='Contact-us'>
							<h5 className=''>Contact Us</h5>
							<ul className='list-unstyled mb-0'>
								<li>
									<a href='#!' className=''>
										Sign Up
									</a>
								</li>
								<li>
									<a href='#!' className=''>
										Sign In
									</a>
								</li>
								<li>
									<a href='#!' className=''>
										About
									</a>
								</li>
							</ul>
						</dir>
					</div>
				</div>
			</section>

			<div className='text-center p-3 default-font'>
				© 2022 Copyright: Moving Co.
			</div>
		</div>
	);
}

export default FooterSignedIn;
