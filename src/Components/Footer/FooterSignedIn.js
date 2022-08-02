import './Footer.css';
import { SocialIcon } from 'react-social-icons';

function FooterSignedIn(props) {
	return (
		<div className='container-fluid footer p-4 pb-0'>
			<section className=''>
				<div className='d-flex justify-content-center gap-for-footer footer-content'>
					<div className='w-60'>
						<a className='navbar-brand' href='#'>
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
									<a href='/signup' className=''>
										Sign Up
									</a>
								</li>
								<li>
									<a href='/signin' className=''>
										Sign In
									</a>
								</li>
								<li>
									<a href='/about' className=''>
										About
									</a>
								</li>
							</ul>
						</div>
						<dir className='Contact-us'>
							<h5 className=''>Contact Us</h5>
							{/* <ul className='list-unstyled mb-0'>
								<li> */}
							<div className='social-media-icons'>
								<SocialIcon
									className='social-icon'
									url='https://github.com/AnAppThatMovesYou'
									bgColor='#FFFFFF'
									network='github'
									target='_blank'
								/>
								{/* </li>
								<li> */}
								<SocialIcon
									className='social-icon'
									url='https://mailhide.io/e/PrcEGwC0'
									bgColor='#FFFFFF'
									network='email'
									target='_blank'
								/>
								{/* </li> */}
								{/* <li>
									<a href='#!' className=''>
										About
									</a>
								</li> */}
								{/* </ul> */}
							</div>
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
